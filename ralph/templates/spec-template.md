# Specification: [FEATURE_NAME]

## Feature: [Feature Title]

### Overview
[Brief description of the feature - what it does and why it matters]

### User Stories
- As a [user type], I want to [action] so that [benefit]
- As a [user type], I want to [action] so that [benefit]

---

## Functional Requirements

### FR-1: [Requirement Name]
[Description of the requirement]

**Acceptance Criteria:**
- [ ] [Specific, testable criterion]
- [ ] [Specific, testable criterion]

### FR-2: [Requirement Name]
[Description of the requirement]

**Acceptance Criteria:**
- [ ] [Specific, testable criterion]
- [ ] [Specific, testable criterion]

---

## Success Criteria

[Measurable, technology-agnostic outcomes]

- [Criterion 1 - e.g., "Users can complete the task in under 30 seconds"]
- [Criterion 2 - e.g., "Error rate below 1%"]

---

## Dependencies
- [Dependency 1]
- [Dependency 2]

## Assumptions
- [Assumption 1]
- [Assumption 2]

---

## Completion Signal

### Implementation Checklist
- [ ] [Deliverable 1]
- [ ] [Deliverable 2]
- [ ] [Deliverable 3]

### Testing Requirements

The agent MUST complete ALL before outputting the magic phrase:

#### Code Quality
- [ ] All existing unit tests pass
- [ ] All existing integration tests pass
- [ ] New tests added for new functionality
- [ ] No lint errors

#### Functional Verification
- [ ] All acceptance criteria verified
- [ ] Edge cases handled
- [ ] Error handling in place

#### Visual Verification (if UI)
- [ ] Desktop view looks correct
- [ ] Mobile view looks correct
- [ ] Design matches style guide

#### Console/Network Check (if web)
- [ ] No JavaScript console errors
- [ ] No failed network requests
- [ ] No 4xx or 5xx errors

### Iteration Instructions

If ANY check fails:
1. Identify the specific issue
2. Fix the code
3. Run tests again
4. Verify all criteria
5. Commit and push
6. Check again

**Only when ALL checks pass, output:** `<promise>DONE</promise>`
