# Contributing

This guide will help you add new skills or improve existing ones.

## Requesting a Skill

You can suggest new skills by [opening an issue](https://github.com/raintree-technology/apple-hig-skills/issues/new).

## Improving Existing Skills

1. Read the existing skill thoroughly
2. Check that reference files are up to date with Apple's current HIG
3. Keep changes focused and minimal
4. Update the version in `VERSIONS.md` if making significant changes

## Adding a New Skill

### 1. Create the skill directory

```bash
mkdir -p skills/hig-your-topic/references
```

### 2. Create the SKILL.md file

Every skill needs a `SKILL.md` file with YAML frontmatter:

```yaml
---
name: hig-your-topic
version: 1.0.0
description: When to use this skill. Include trigger phrases and keywords that help agents identify relevant tasks. Cross-reference related skills.
---

# Apple HIG: Your Topic

You are an expert in Apple's Human Interface Guidelines...
```

### 3. Follow the naming conventions

- **Directory name**: `hig-` prefix, lowercase, hyphens only (e.g., `hig-components-layout`)
- **Name field**: must match directory name exactly
- **Description**: 1-1024 characters, include trigger phrases and cross-references

### 4. Structure your skill

```
skills/hig-your-topic/
├── SKILL.md           # Required - instructions and reference index (<500 lines)
└── references/        # HIG content files
    ├── topic-a.md
    └── topic-b.md
```

### 5. Write effective SKILL.md content

- Start with persona: "You are an expert in Apple's Human Interface Guidelines."
- Include "When to Use This Skill" section with specific topics
- Summarize key principles (don't duplicate full reference content)
- Provide a reference index table mapping topics to files
- End with "Related Skills" section cross-referencing other skills
- Keep under 500 lines total

### 6. Add reference files

- Place HIG content in `references/` with clean hyphenated filenames
- Keep original Apple content intact
- One topic per file

## Submitting Your Contribution

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/hig-new-topic`)
3. Make your changes
4. Submit a pull request

Before you open a PR, run:

```bash
node packages/hig-doctor/src/cli.js . --verbose
```

Optional interactive review:

```bash
node packages/hig-doctor/src/cli.js . --tui
```

## Skill Quality Checklist

- [ ] `name` matches directory name
- [ ] `name` starts with `hig-` prefix
- [ ] `description` clearly explains when to use the skill (includes trigger phrases)
- [ ] `description` cross-references related skills
- [ ] `SKILL.md` is under 500 lines
- [ ] Reference index table covers all files in `references/`
- [ ] Related Skills section is accurate
- [ ] No broken file references
- [ ] `VERSIONS.md` updated if modifying existing skills
