#!/bin/bash
#
# RLM Subcall Helper (Experimental)
#
# Runs a focused sub-query against Claude or Codex and stores the output.
# This enables optional recursive decomposition without changing the main loop.
#
# Usage:
#   ./scripts/rlm-subcall.sh --query rlm/queries/q1.md
#   ./scripts/rlm-subcall.sh --agent claude --query rlm/queries/q1.md --output rlm/answers/a1.md
#   ./scripts/rlm-subcall.sh --agent codex --query rlm/queries/q1.md --context rlm/context.txt
#

set -e
set -o pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$PROJECT_DIR/logs"
CONSTITUTION="$PROJECT_DIR/.specify/memory/constitution.md"

RLM_DIR="$PROJECT_DIR/rlm"
RLM_TRACE_DIR="$RLM_DIR/trace"
RLM_QUERIES_DIR="$RLM_DIR/queries"
RLM_ANSWERS_DIR="$RLM_DIR/answers"
RLM_INDEX="$RLM_DIR/index.tsv"

AGENT=""
QUERY_FILE=""
OUTPUT_FILE=""
CONTEXT_FILE=""

CLAUDE_CMD="${CLAUDE_CMD:-claude}"
CODEX_CMD="${CODEX_CMD:-codex}"

YOLO_ENABLED=true
if [[ -f "$CONSTITUTION" ]]; then
    if grep -q "YOLO Mode.*DISABLED" "$CONSTITUTION" 2>/dev/null; then
        YOLO_ENABLED=false
    fi
fi

show_help() {
    cat <<EOF
RLM Subcall Helper (Experimental)

Usage:
  ./scripts/rlm-subcall.sh --query <file>
  ./scripts/rlm-subcall.sh --agent claude|codex --query <file> --output <file>
  ./scripts/rlm-subcall.sh --agent codex --query <file> --context <file>

Options:
  --agent <claude|codex>   Force specific agent (auto-detect if omitted)
  --query <file>           Query prompt file (required)
  --output <file>          Output file (default: rlm/answers/subcall_<ts>.md)
  --context <file>         Large context file to treat as external environment
  -h, --help               Show help
EOF
}

while [[ $# -gt 0 ]]; do
    case "$1" in
        --agent)
            AGENT="${2:-}"
            shift 2
            ;;
        --query|--query-file)
            QUERY_FILE="${2:-}"
            shift 2
            ;;
        --output)
            OUTPUT_FILE="${2:-}"
            shift 2
            ;;
        --context|--rlm-context)
            CONTEXT_FILE="${2:-}"
            shift 2
            ;;
        -h|--help)
            show_help
            exit 0
            ;;
        *)
            echo "Unknown argument: $1"
            show_help
            exit 1
            ;;
    esac
done

if [ -z "$QUERY_FILE" ]; then
    echo "Error: --query <file> is required."
    show_help
    exit 1
fi

if [ ! -f "$QUERY_FILE" ]; then
    echo "Error: query file not found: $QUERY_FILE"
    exit 1
fi

if [ -n "$CONTEXT_FILE" ] && [ ! -f "$CONTEXT_FILE" ]; then
    echo "Error: context file not found: $CONTEXT_FILE"
    exit 1
fi

mkdir -p "$LOG_DIR" "$RLM_TRACE_DIR" "$RLM_QUERIES_DIR" "$RLM_ANSWERS_DIR"
if [ ! -f "$RLM_INDEX" ]; then
    echo -e "timestamp\tmode\titeration\tprompt\tlog\toutput\tstatus" > "$RLM_INDEX"
fi

# Auto-detect agent if not set
if [ -z "$AGENT" ]; then
    if command -v "$CLAUDE_CMD" &> /dev/null; then
        AGENT="claude"
    elif command -v "$CODEX_CMD" &> /dev/null; then
        AGENT="codex"
    else
        echo "Error: Neither 'claude' nor 'codex' CLI found."
        exit 1
    fi
fi

TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
TS_FILE=$(date '+%Y%m%d_%H%M%S')
LOG_FILE="$LOG_DIR/rlm_subcall_${TS_FILE}.log"
PROMPT_SNAPSHOT="$RLM_TRACE_DIR/subcall_${TS_FILE}_prompt.md"
OUTPUT_SNAPSHOT="$RLM_TRACE_DIR/subcall_${TS_FILE}_output.log"

if [ -z "$OUTPUT_FILE" ]; then
    OUTPUT_FILE="$RLM_ANSWERS_DIR/subcall_${TS_FILE}.md"
fi

cat "$QUERY_FILE" > "$PROMPT_SNAPSHOT"

if [ -n "$CONTEXT_FILE" ]; then
cat >> "$PROMPT_SNAPSHOT" << EOF

---
## RLM Context (Optional)

You have access to a large context file at:
**$CONTEXT_FILE**

Treat this file as an external environment. Do NOT paste the whole file into the prompt.
Inspect only the slices you need using shell tools or Python.
EOF
fi

STATUS="unknown"

if [ "$AGENT" = "claude" ]; then
    CLAUDE_FLAGS="-p"
    if [ "$YOLO_ENABLED" = true ]; then
        CLAUDE_FLAGS="$CLAUDE_FLAGS --dangerously-skip-permissions"
    fi
    if OUTPUT=$(cat "$PROMPT_SNAPSHOT" | "$CLAUDE_CMD" $CLAUDE_FLAGS 2>&1 | tee "$LOG_FILE"); then
        printf "%s\n" "$OUTPUT" > "$OUTPUT_FILE"
        cp "$LOG_FILE" "$OUTPUT_SNAPSHOT"
        STATUS="ok"
    else
        cp "$LOG_FILE" "$OUTPUT_SNAPSHOT"
        STATUS="error"
    fi
elif [ "$AGENT" = "codex" ]; then
    CODEX_FLAGS="exec"
    if [ "$YOLO_ENABLED" = true ]; then
        CODEX_FLAGS="$CODEX_FLAGS --dangerously-bypass-approvals-and-sandbox"
    fi
    if cat "$PROMPT_SNAPSHOT" | "$CODEX_CMD" $CODEX_FLAGS - --output-last-message "$OUTPUT_FILE" 2>&1 | tee "$LOG_FILE"; then
        cp "$LOG_FILE" "$OUTPUT_SNAPSHOT"
        STATUS="ok"
    else
        cp "$LOG_FILE" "$OUTPUT_SNAPSHOT"
        STATUS="error"
    fi
else
    echo "Error: unknown agent '$AGENT' (use 'claude' or 'codex')."
    exit 1
fi

echo -e "${TIMESTAMP}\trlm-subcall\t0\t${PROMPT_SNAPSHOT}\t${LOG_FILE}\t${OUTPUT_FILE}\t${STATUS}" >> "$RLM_INDEX"

echo ""
echo "RLM subcall complete."
echo "Prompt:  $PROMPT_SNAPSHOT"
echo "Output:  $OUTPUT_FILE"
echo "Log:     $LOG_FILE"
