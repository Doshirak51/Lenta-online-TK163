# Lenta Online TK163 — project instructions

This repository is the static employee quick-start navigator for TK163. Preserve its Russian content, work links, search, filters, clipboard fallbacks, Lenta identity, Manrope font, and cat Uh mascot. Keep the existing HTML/CSS/JavaScript stack and the approved desktop direction; prioritize clear, usable mobile layouts.

## Impeccable

Read `.agents/skills/impeccable/SKILL.md` before relevant UI work. The initial agreed workflows are:
- `critique`: inspect usability and visual hierarchy.
- `layout`: improve spacing, alignment, and composition.
- `typeset`: improve typography and readability.
- `adapt`: adapt the interface to screen sizes and devices.
- `optimize`: improve interface performance.
- `polish`: finish a requested change with a bounded quality pass.

Load the matching reference file only when needed. Other upstream playbooks remain bundled to preserve internal references, but do not broaden the task or redesign the website without a user request. Taste Skill and Emil Kowalski's skills are deferred.

User requirements and project identity take precedence over general design heuristics. This is a frequent-use work navigator: keep useful actions easy to scan and reach. Preserve accessibility and reduced-motion support. Add dependencies only when required for requested behavior.

The Impeccable launcher may download its pinned, checksum-verified engine on first use. If unavailable, follow the documented fallback and report the limitation. No executable hooks are installed or enabled. Do not enable them as a side effect.

For UI changes, inspect desktop and mobile, verify the affected functional flows, and check relative links and assets under the published subpath. Report only checks actually performed.

## Change isolation

Keep this setup in `codex/impeccable-setup`. Do not merge into or push to `main`, or deploy, unless separately requested. Installing the skills does not itself change the website. Keep unrelated Spec Kit work separate.
