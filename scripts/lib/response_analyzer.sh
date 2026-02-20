#!/bin/bash
# Response Analyzer for Ralph Loop
# Analyzes Claude output to detect completion signals and progress

source "$(dirname "${BASH_SOURCE[0]}")/date_utils.sh"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Completion detection keywords
COMPLETION_KEYWORDS=("done" "complete" "finished" "all tasks complete" "project complete" "<promise>DONE</promise>" "<promise>ALL_DONE</promise>")

# Analyze Claude response for completion signals
# Args: $1 = output_file, $2 = loop_number
# Returns: 0 if should continue, 1 if should exit (completion detected)
analyze_response() {
    local output_file=$1
    local loop_number=$2
    local analysis_file="${3:-.response_analysis}"

    if [[ ! -f "$output_file" ]]; then
        echo "ERROR: Output file not found: $output_file" >&2
        return 0  # Continue loop
    fi

    local output_content=$(cat "$output_file")
    local output_length=${#output_content}
    
    # Initialize analysis values
    local has_completion_signal=false
    local has_promise_done=false
    local has_promise_all_done=false
    local files_modified=0
    local has_errors=false
    local confidence_score=0
    local work_summary=""

    # 1. Check for explicit <promise>DONE</promise> or <promise>ALL_DONE</promise>
    if grep -q "<promise>DONE</promise>" "$output_file"; then
        has_promise_done=true
        has_completion_signal=true
        confidence_score=100
        work_summary="Explicit DONE promise detected"
    fi

    if grep -q "<promise>ALL_DONE</promise>" "$output_file"; then
        has_promise_all_done=true
        has_completion_signal=true
        confidence_score=100
        work_summary="All items complete - ALL_DONE promise detected"
    fi

    # 2. Check for completion keywords in natural language
    if [[ "$has_completion_signal" == "false" ]]; then
        for keyword in "${COMPLETION_KEYWORDS[@]}"; do
            if grep -qi "$keyword" "$output_file"; then
                has_completion_signal=true
                ((confidence_score+=20))
                break
            fi
        done
    fi

    # 3. Check for file changes via git
    if command -v git &>/dev/null && git rev-parse --git-dir >/dev/null 2>&1; then
        files_modified=$(git diff --name-only 2>/dev/null | wc -l | tr -d ' ')
        if [[ $files_modified -gt 0 ]]; then
            ((confidence_score+=20))
        fi
    fi

    # 4. Check for errors in output
    local error_count=$(grep -c -i "error\|exception\|fatal\|failed" "$output_file" 2>/dev/null || echo "0")
    error_count=$(echo "$error_count" | tr -d ' ')
    if [[ $error_count -gt 5 ]]; then
        has_errors=true
    fi

    # 5. Extract summary from output
    if [[ -z "$work_summary" ]]; then
        work_summary=$(grep -i "summary\|completed\|implemented" "$output_file" 2>/dev/null | head -1 | cut -c 1-100)
        [[ -z "$work_summary" ]] && work_summary="Output analyzed"
    fi

    # Write analysis result to file
    cat > "$analysis_file" << EOF
{
    "loop_number": $loop_number,
    "timestamp": "$(get_iso_timestamp)",
    "output_file": "$output_file",
    "analysis": {
        "has_completion_signal": $has_completion_signal,
        "has_promise_done": $has_promise_done,
        "has_promise_all_done": $has_promise_all_done,
        "files_modified": $files_modified,
        "has_errors": $has_errors,
        "confidence_score": $confidence_score,
        "output_length": $output_length,
        "work_summary": "$work_summary"
    }
}
EOF

    # Return based on completion detection
    if [[ "$has_promise_done" == "true" || "$has_promise_all_done" == "true" ]]; then
        return 1  # Completion detected
    fi
    
    return 0  # Continue loop
}

# Log analysis summary
log_analysis_summary() {
    local analysis_file="${1:-.response_analysis}"

    if [[ ! -f "$analysis_file" ]]; then
        return 1
    fi

    local loop=$(jq -r '.loop_number' "$analysis_file" 2>/dev/null)
    local has_done=$(jq -r '.analysis.has_promise_done' "$analysis_file" 2>/dev/null)
    local has_all_done=$(jq -r '.analysis.has_promise_all_done' "$analysis_file" 2>/dev/null)
    local confidence=$(jq -r '.analysis.confidence_score' "$analysis_file" 2>/dev/null)
    local files_changed=$(jq -r '.analysis.files_modified' "$analysis_file" 2>/dev/null)
    local summary=$(jq -r '.analysis.work_summary' "$analysis_file" 2>/dev/null)

    echo -e "${BLUE}═══════════════════════════════════════════════════${NC}"
    echo -e "${BLUE}  Response Analysis - Loop #$loop${NC}"
    echo -e "${BLUE}═══════════════════════════════════════════════════${NC}"
    echo -e "${YELLOW}DONE Promise:${NC}     $has_done"
    echo -e "${YELLOW}ALL_DONE:${NC}         $has_all_done"
    echo -e "${YELLOW}Confidence:${NC}       $confidence%"
    echo -e "${YELLOW}Files Changed:${NC}    $files_changed"
    echo -e "${YELLOW}Summary:${NC}          $summary"
    echo ""
}

# Export functions
export -f analyze_response
export -f log_analysis_summary
