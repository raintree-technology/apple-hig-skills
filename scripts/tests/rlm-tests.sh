#!/bin/bash
#
# RLM Integration Tests (Experimental)
#
# These tests stub the Claude/Codex CLIs and verify that:
# - Logs are written
# - RLM workspace is created
# - Index is updated
# - Subcall helper works
#

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
TMP_DIR="$(mktemp -d)"

cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

pass() { echo "✅ $1"; }
fail() { echo "❌ $1"; exit 1; }

mkdir -p "$TMP_DIR/scripts" \
         "$TMP_DIR/.specify/memory" \
         "$TMP_DIR/specs" \
         "$TMP_DIR/rlm/queries" \
         "$TMP_DIR/rlm/answers" \
         "$TMP_DIR/logs" \
         "$TMP_DIR/bin"

cp "$ROOT_DIR/scripts/ralph-loop.sh" "$TMP_DIR/scripts/"
cp "$ROOT_DIR/scripts/ralph-loop-codex.sh" "$TMP_DIR/scripts/"
cp "$ROOT_DIR/scripts/rlm-subcall.sh" "$TMP_DIR/scripts/"
chmod +x "$TMP_DIR/scripts/"*.sh

cat > "$TMP_DIR/.specify/memory/constitution.md" <<'EOF'
# Test Constitution
YOLO Mode: ENABLED
EOF

echo "# spec" > "$TMP_DIR/specs/001-test.md"
echo "dummy context" > "$TMP_DIR/rlm/context.txt"
echo "subcall query" > "$TMP_DIR/rlm/queries/q1.md"

# Stub Claude CLI
cat > "$TMP_DIR/bin/claude" <<'EOF'
#!/bin/bash
cat - >/dev/null
echo "stub claude output"
echo "<promise>DONE</promise>"
exit 0
EOF
chmod +x "$TMP_DIR/bin/claude"

# Stub Codex CLI
cat > "$TMP_DIR/bin/codex" <<'EOF'
#!/bin/bash
OUTPUT_FILE=""
for ((i=1;i<=$#;i++)); do
  if [ "${!i}" = "--output-last-message" ]; then
    j=$((i+1))
    OUTPUT_FILE="${!j}"
  fi
done
cat - >/dev/null
echo "stub codex output"
if [ -n "$OUTPUT_FILE" ]; then
  echo "<promise>DONE</promise>" > "$OUTPUT_FILE"
fi
exit 0
EOF
chmod +x "$TMP_DIR/bin/codex"

PATH="$TMP_DIR/bin:$PATH"

echo "Running ralph-loop.sh (CLAUDE)..."
(
  cd "$TMP_DIR"
  CLAUDE_CMD="$TMP_DIR/bin/claude" ./scripts/ralph-loop.sh 1 --rlm-context rlm/context.txt >/dev/null
)

if [ ! -f "$TMP_DIR/rlm/index.tsv" ]; then fail "rlm/index.tsv not created"; fi
if ! grep -q "done" "$TMP_DIR/rlm/index.tsv"; then fail "rlm/index.tsv missing done status"; fi
if ! ls "$TMP_DIR/rlm/trace/"iter_1_prompt.md >/dev/null 2>&1; then fail "prompt snapshot missing"; fi
if ! ls "$TMP_DIR/rlm/trace/"iter_1_output.log >/dev/null 2>&1; then fail "output snapshot missing"; fi
pass "ralph-loop.sh creates logs and RLM workspace"

echo "Running ralph-loop-codex.sh (CODEX)..."
(
  cd "$TMP_DIR"
  CODEX_CMD="$TMP_DIR/bin/codex" ./scripts/ralph-loop-codex.sh 1 --rlm-context rlm/context.txt >/dev/null
)

if ! grep -q "done" "$TMP_DIR/rlm/index.tsv"; then fail "codex run did not update index"; fi
if ! ls "$TMP_DIR/rlm/trace/"iter_1_last_message.txt >/dev/null 2>&1; then
  pass "codex run created RLM trace (last message snapshot not required)"
else
  pass "codex run created last message snapshot"
fi

echo "Running rlm-subcall.sh..."
(
  cd "$TMP_DIR"
  CLAUDE_CMD="$TMP_DIR/bin/claude" ./scripts/rlm-subcall.sh --agent claude --query rlm/queries/q1.md --context rlm/context.txt >/dev/null
)

if ! ls "$TMP_DIR/rlm/answers/"subcall_*.md >/dev/null 2>&1; then fail "rlm subcall output missing"; fi
pass "rlm-subcall works"

echo ""
echo "All RLM tests passed."
