#!/bin/bash
#
# Ralph Wiggum NR_OF_TRIES Tracking Library
#
# Tracks how many times each spec has been attempted.
# After MAX_NR_OF_TRIES (default: 10), the spec is considered stuck
# and should be split into smaller specs.
#

MAX_NR_OF_TRIES="${MAX_NR_OF_TRIES:-10}"

# Portable sed -i helper for GNU/BSD compatibility.
portable_sed_inplace() {
    local expr="$1"
    local file="$2"
    if sed --version >/dev/null 2>&1; then
        sed -i "$expr" "$file"
    else
        sed -i '' "$expr" "$file"
    fi
}

# Get NR_OF_TRIES for a spec file
# Returns 0 if not found
get_nr_of_tries() {
    local spec_file="$1"
    if [ -f "$spec_file" ]; then
        local tries
        tries=$(
            sed -n 's/.*NR_OF_TRIES:[[:space:]]*\([0-9][0-9]*\).*/\1/p' "$spec_file" 2>/dev/null \
                | tail -n 1
        )
        echo "${tries:-0}"
    else
        echo "0"
    fi
}

# Increment NR_OF_TRIES for a spec file
# Adds the counter if not present, increments if present
# Returns the new value
increment_nr_of_tries() {
    local spec_file="$1"
    local current_tries
    current_tries=$(get_nr_of_tries "$spec_file")
    local new_tries=$((current_tries + 1))

    if grep -q "NR_OF_TRIES:" "$spec_file" 2>/dev/null; then
        portable_sed_inplace "s/NR_OF_TRIES:[[:space:]]*[0-9][0-9]*/NR_OF_TRIES: $new_tries/" "$spec_file"
    else
        echo -e "\n<!-- NR_OF_TRIES: $new_tries -->" >> "$spec_file"
    fi

    echo "$new_tries"
}

# Reset NR_OF_TRIES for a spec file
reset_nr_of_tries() {
    local spec_file="$1"
    if grep -q "NR_OF_TRIES:" "$spec_file" 2>/dev/null; then
        portable_sed_inplace "s/NR_OF_TRIES:[[:space:]]*[0-9][0-9]*/NR_OF_TRIES: 0/" "$spec_file"
    fi
}

# Check if a spec is stuck (exceeded max tries)
is_spec_stuck() {
    local spec_file="$1"
    local tries
    tries=$(get_nr_of_tries "$spec_file")
    [ "$tries" -ge "$MAX_NR_OF_TRIES" ]
}

# Get all stuck specs in a directory
get_stuck_specs() {
    local specs_dir="${1:-specs}"
    local stuck_specs=()

    if [ -d "$specs_dir" ]; then
        while IFS= read -r spec_file; do
            if [ -n "$spec_file" ] && is_spec_stuck "$spec_file"; then
                stuck_specs+=("$spec_file")
            fi
        done < <(find "$specs_dir" -maxdepth 2 -name "spec.md" -o -name "*.md" 2>/dev/null | sort)
    fi

    printf '%s\n' "${stuck_specs[@]}"
}

# Print stuck specs summary
print_stuck_specs_summary() {
    local specs_dir="${1:-specs}"
    local stuck_specs
    stuck_specs=$(get_stuck_specs "$specs_dir")

    if [ -n "$stuck_specs" ]; then
        echo "⚠️ Stuck Specs (>= $MAX_NR_OF_TRIES attempts):"
        echo "$stuck_specs" | while read -r spec; do
            local tries
            tries=$(get_nr_of_tries "$spec")
            echo "  - $spec ($tries attempts)"
        done
        echo ""
        echo "Consider splitting these specs into smaller, more achievable tasks."
    fi
}
