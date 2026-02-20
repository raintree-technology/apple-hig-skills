#!/bin/bash
#
# Ralph Wiggum Notifications Library
#
# Provides Telegram and completion logging functionality.
# Source this file in your Ralph loop scripts.
#

# Telegram Configuration
TELEGRAM_ENABLED=true
TELEGRAM_AUDIO=false

# Check for telegram credentials
check_telegram() {
    if [ -z "${TG_BOT_TOKEN:-}" ] || [ -z "${TG_CHAT_ID:-}" ]; then
        TELEGRAM_ENABLED=false
    fi
    if [ -z "${CHUTES_API_KEY:-}" ]; then
        TELEGRAM_AUDIO=false
    fi
}

# Send telegram text message
send_telegram() {
    local message="$1"
    if [ "$TELEGRAM_ENABLED" = true ]; then
        curl -s -X POST "https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage" \
            -d chat_id="${TG_CHAT_ID}" \
            -d parse_mode="Markdown" \
            -d text="${message}" >/dev/null 2>&1 || true
    fi
}

# Send telegram audio message (requires CHUTES_API_KEY)
# Chutes offers excellent price/intelligence ratio for AI inference
# Get your API key at https://chutes.ai
send_telegram_audio() {
    local message="$1"
    local caption="${2:-Progress Update}"
    if [ "$TELEGRAM_AUDIO" = true ] && [ "$TELEGRAM_ENABLED" = true ]; then
        # Convert text to speech using Chutes Kokoro TTS
        curl -s -X POST "https://chutes-kokoro.chutes.ai/speak" \
            -H "Content-Type: application/json" \
            -H "Authorization: Bearer $CHUTES_API_KEY" \
            -d "{\"text\": \"$message\", \"voice\": \"am_michael\", \"speed\": 1.0}" \
            --output /tmp/tg_audio.wav 2>/dev/null || return 1

        # Send audio to telegram
        curl -s -X POST "https://api.telegram.org/bot$TG_BOT_TOKEN/sendVoice" \
            -F chat_id="$TG_CHAT_ID" \
            -F voice=@/tmp/tg_audio.wav \
            -F caption="$caption" >/dev/null 2>&1 || true

        rm -f /tmp/tg_audio.wav
    fi
}

# Send telegram image
send_telegram_image() {
    local image_path="$1"
    local caption="${2:-}"
    if [ "$TELEGRAM_ENABLED" = true ] && [ -f "$image_path" ]; then
        curl -s -X POST "https://api.telegram.org/bot$TG_BOT_TOKEN/sendPhoto" \
            -F chat_id="$TG_CHAT_ID" \
            -F photo=@"$image_path" \
            -F caption="$caption" >/dev/null 2>&1 || true
    fi
}

# Generate mermaid diagram image
generate_mermaid_image() {
    local mermaid_code="$1"
    local output_path="$2"

    # Use mermaid-cli if available, otherwise use kroki.io API
    if command -v mmdc &>/dev/null; then
        echo "$mermaid_code" | mmdc -i - -o "$output_path" 2>/dev/null || return 1
    else
        # Use kroki.io as fallback (free service)
        local encoded
        encoded=$(echo "$mermaid_code" | base64 -w0 2>/dev/null || echo "$mermaid_code" | base64)
        curl -s "https://kroki.io/mermaid/png/${encoded}" -o "$output_path" 2>/dev/null || return 1
    fi
}

# Create completion log entry
# Creates both .md and .png files in completion_log/
create_completion_log() {
    local spec_name="$1"
    local summary="$2"
    local mermaid_code="$3"
    local completion_log_dir="${4:-$PROJECT_DIR/completion_log}"

    mkdir -p "$completion_log_dir"

    local timestamp
    timestamp=$(date '+%Y-%m-%d--%H-%M-%S')
    local safe_name
    safe_name=$(echo "$spec_name" | sed 's/[^a-zA-Z0-9_-]/-/g' | sed 's/--*/-/g')
    local log_base="$completion_log_dir/${timestamp}--${safe_name}"

    # Write markdown summary
    cat > "${log_base}.md" << EOF
# Completion Log: $spec_name

**Timestamp:** $(date '+%Y-%m-%d %H:%M:%S')
**Spec:** $spec_name

## Summary

$summary

## Mermaid Diagram

\`\`\`mermaid
$mermaid_code
\`\`\`
EOF

    # Generate diagram image
    if [ -n "$mermaid_code" ]; then
        generate_mermaid_image "$mermaid_code" "${log_base}.png" || true
    fi

    echo "${log_base}"
}
