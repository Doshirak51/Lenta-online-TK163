# Impeccable for this project

The initial workflows are `polish`, `critique`, `layout`, `typeset`, `adapt`, and `optimize`.

Examples:
- «Используй Impeccable critique для мобильной версии».
- «Используй Impeccable layout: выровняй кнопки».
- «Проверь результат через Impeccable polish».

In Codex, invoke `$impeccable adapt` (or another command). If the environment does not discover project skills, ask the agent to read `.agents/skills/impeccable/SKILL.md` and the relevant playbook directly.

The complete upstream support files are retained to keep references intact. Only Impeccable is included; Taste Skill and Emil Kowalski's skills are deferred. No automatic executable hooks are installed. The launcher downloads the version-pinned engine and verifies its checksum when needed; its documented fallback applies without network access.

Source: https://github.com/pbakaus/impeccable
Pinned commit: `909726c7e8be484daba481873640f64aa24f62dc`.
Original file hashes are recorded in `skills-lock.json`; Apache-2.0 license and upstream notices are in `licenses/impeccable/`.

This setup is isolated in `codex/impeccable-setup`. Website files and `main` are unchanged. To undo before merging, stop using or delete this branch; to undo after a future merge, revert the setup commit. Spec Kit is separate and is not installed by these files.
