#!/bin/bash
# Circuit Breaker for Ralph Loop
# Prevents runaway loops by detecting stagnation

source "$(dirname "${BASH_SOURCE[0]}")/date_utils.sh"

# Circuit Breaker States
CB_STATE_CLOSED="CLOSED"        # Normal operation
CB_STATE_HALF_OPEN="HALF_OPEN"  # Monitoring mode
CB_STATE_OPEN="OPEN"            # Failure detected, halt execution

# Configuration
CB_STATE_FILE=".circuit_breaker_state"
CB_NO_PROGRESS_THRESHOLD=5      # Open after N loops with no progress
CB_SAME_ERROR_THRESHOLD=3       # Open after N loops with same error

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Initialize circuit breaker
init_circuit_breaker() {
    if [[ ! -f "$CB_STATE_FILE" ]]; then
        cat > "$CB_STATE_FILE" << EOF
{
    "state": "$CB_STATE_CLOSED",
    "last_change": "$(get_iso_timestamp)",
    "consecutive_no_progress": 0,
    "consecutive_same_error": 0,
    "last_progress_loop": 0,
    "total_opens": 0,
    "reason": ""
}
EOF
    fi
}

# Get current circuit breaker state
get_circuit_state() {
    if [[ ! -f "$CB_STATE_FILE" ]]; then
        echo "$CB_STATE_CLOSED"
        return
    fi
    jq -r '.state' "$CB_STATE_FILE" 2>/dev/null || echo "$CB_STATE_CLOSED"
}

# Check if circuit breaker allows execution
can_execute() {
    local state=$(get_circuit_state)
    if [[ "$state" == "$CB_STATE_OPEN" ]]; then
        return 1
    fi
    return 0
}

# Record loop result and update circuit breaker
# Args: $1=loop_number, $2=files_changed, $3=has_errors
record_loop_result() {
    local loop_number=$1
    local files_changed=$2
    local has_errors=$3

    init_circuit_breaker

    local state_data=$(cat "$CB_STATE_FILE")
    local current_state=$(echo "$state_data" | jq -r '.state')
    local consecutive_no_progress=$(echo "$state_data" | jq -r '.consecutive_no_progress')
    local consecutive_same_error=$(echo "$state_data" | jq -r '.consecutive_same_error')
    local last_progress_loop=$(echo "$state_data" | jq -r '.last_progress_loop')
    local total_opens=$(echo "$state_data" | jq -r '.total_opens')

    # Ensure integers
    consecutive_no_progress=$((consecutive_no_progress + 0))
    consecutive_same_error=$((consecutive_same_error + 0))
    last_progress_loop=$((last_progress_loop + 0))
    total_opens=$((total_opens + 0))

    # Detect progress
    local has_progress=false
    if [[ $files_changed -gt 0 ]]; then
        has_progress=true
        consecutive_no_progress=0
        last_progress_loop=$loop_number
    else
        consecutive_no_progress=$((consecutive_no_progress + 1))
    fi

    # Track errors
    if [[ "$has_errors" == "true" ]]; then
        consecutive_same_error=$((consecutive_same_error + 1))
    else
        consecutive_same_error=0
    fi

    # Determine new state
    local new_state="$current_state"
    local reason=""

    case $current_state in
        "$CB_STATE_CLOSED")
            if [[ $consecutive_no_progress -ge $CB_NO_PROGRESS_THRESHOLD ]]; then
                new_state="$CB_STATE_OPEN"
                reason="No progress in $consecutive_no_progress consecutive loops"
            elif [[ $consecutive_same_error -ge $CB_SAME_ERROR_THRESHOLD ]]; then
                new_state="$CB_STATE_OPEN"
                reason="Same error in $consecutive_same_error consecutive loops"
            elif [[ $consecutive_no_progress -ge 2 ]]; then
                new_state="$CB_STATE_HALF_OPEN"
                reason="Monitoring: $consecutive_no_progress loops without progress"
            fi
            ;;
        "$CB_STATE_HALF_OPEN")
            if [[ "$has_progress" == "true" ]]; then
                new_state="$CB_STATE_CLOSED"
                reason="Progress detected, circuit recovered"
            elif [[ $consecutive_no_progress -ge $CB_NO_PROGRESS_THRESHOLD ]]; then
                new_state="$CB_STATE_OPEN"
                reason="No recovery, opening circuit"
            fi
            ;;
        "$CB_STATE_OPEN")
            reason="Circuit is open, execution halted"
            ;;
    esac

    # Update opens count
    if [[ "$new_state" == "$CB_STATE_OPEN" && "$current_state" != "$CB_STATE_OPEN" ]]; then
        total_opens=$((total_opens + 1))
    fi

    # Write updated state
    cat > "$CB_STATE_FILE" << EOF
{
    "state": "$new_state",
    "last_change": "$(get_iso_timestamp)",
    "consecutive_no_progress": $consecutive_no_progress,
    "consecutive_same_error": $consecutive_same_error,
    "last_progress_loop": $last_progress_loop,
    "total_opens": $total_opens,
    "reason": "$reason",
    "current_loop": $loop_number
}
EOF

    # Log state transition
    if [[ "$new_state" != "$current_state" ]]; then
        case $new_state in
            "$CB_STATE_OPEN")
                echo -e "${RED}🚨 CIRCUIT BREAKER OPENED: $reason${NC}"
                ;;
            "$CB_STATE_HALF_OPEN")
                echo -e "${YELLOW}⚠️  CIRCUIT BREAKER: Monitoring - $reason${NC}"
                ;;
            "$CB_STATE_CLOSED")
                echo -e "${GREEN}✅ CIRCUIT BREAKER: Normal Operation - $reason${NC}"
                ;;
        esac
    fi

    # Return based on state
    if [[ "$new_state" == "$CB_STATE_OPEN" ]]; then
        return 1
    fi
    return 0
}

# Check if should halt
should_halt_execution() {
    local state=$(get_circuit_state)
    if [[ "$state" == "$CB_STATE_OPEN" ]]; then
        echo -e "${RED}╔══════════════════════════════════════════════════════════╗${NC}"
        echo -e "${RED}║  EXECUTION HALTED: Circuit Breaker Opened               ║${NC}"
        echo -e "${RED}╚══════════════════════════════════════════════════════════╝${NC}"
        echo ""
        echo -e "${YELLOW}Ralph detected no progress is being made.${NC}"
        echo ""
        echo "Possible reasons:"
        echo "  • Task may be complete"
        echo "  • Agent may be stuck on an error"
        echo "  • Prompt needs clarification"
        echo ""
        echo "To continue:"
        echo "  1. Review logs"
        echo "  2. Fix any issues"
        echo "  3. Reset circuit breaker: --reset-circuit"
        return 0  # Should halt
    fi
    return 1  # Can continue
}

# Reset circuit breaker
reset_circuit_breaker() {
    local reason=${1:-"Manual reset"}
    cat > "$CB_STATE_FILE" << EOF
{
    "state": "$CB_STATE_CLOSED",
    "last_change": "$(get_iso_timestamp)",
    "consecutive_no_progress": 0,
    "consecutive_same_error": 0,
    "last_progress_loop": 0,
    "total_opens": 0,
    "reason": "$reason"
}
EOF
    echo -e "${GREEN}✅ Circuit breaker reset to CLOSED state${NC}"
}

# Show circuit status
show_circuit_status() {
    init_circuit_breaker
    local state=$(jq -r '.state' "$CB_STATE_FILE")
    local reason=$(jq -r '.reason' "$CB_STATE_FILE")
    local no_progress=$(jq -r '.consecutive_no_progress' "$CB_STATE_FILE")
    local current_loop=$(jq -r '.current_loop' "$CB_STATE_FILE")

    echo -e "${YELLOW}Circuit Breaker Status${NC}"
    echo "  State: $state"
    echo "  Reason: $reason"
    echo "  Loops without progress: $no_progress"
    echo "  Current loop: $current_loop"
}

# Export functions
export -f init_circuit_breaker
export -f get_circuit_state
export -f can_execute
export -f record_loop_result
export -f should_halt_execution
export -f reset_circuit_breaker
export -f show_circuit_status
