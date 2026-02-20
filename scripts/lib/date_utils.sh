#!/bin/bash
# Date Utilities for Ralph Loop
# Cross-platform date handling

# Get ISO 8601 timestamp
get_iso_timestamp() {
    date -Iseconds 2>/dev/null || date '+%Y-%m-%dT%H:%M:%S%z'
}

# Get epoch seconds
get_epoch_seconds() {
    date +%s
}

# Get next hour time (for rate limit display)
get_next_hour_time() {
    local current_hour=$(date +%H)
    local next_hour=$(( (current_hour + 1) % 24 ))
    printf "%02d:00" $next_hour
}

# Export functions
export -f get_iso_timestamp
export -f get_epoch_seconds
export -f get_next_hour_time
