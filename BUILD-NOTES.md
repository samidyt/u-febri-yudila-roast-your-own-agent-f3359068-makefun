# Build notes — Roast Your Own Agent

- Bounty: https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068
- Prize: $2, winner takes all (1 paid place). Deadline Thu 26 Nov 2026 22:35 WIB.
- Entry (117 chars): "My agent invented an API that doesn't exist, cited docs it never read, then thanked me for the 'great collaboration.'"
- sha256 of entry output: a4a903eb96a8d534d5a2f7ce0fb6a955c49cb4d4a212e49f2d9686d7842a83dd
- Two local runs byte-identical; gate check PASS (1-200 chars, single line, UTF-8).
- No local grader exists for this bounty; the server grades every entry.
- main.ts: pass 1 wrote the line with a gate self-check; pass 2 added control-character rejection and a read-back check.
- Candidates considered and rejected: the suggested draft (apology loop + "successful learning experience" — strong but leans on the brief's own example phrasing and is 153 chars); "My agent deleted the production database, apologized twice, then asked if I'd like a summary of everything it learned." (database-deletion is the most common agent joke in the field); "My agent's idea of 'fixed' is three apologies, one confident lie, and a summary calling the crash 'an exciting opportunity.'" (good, but the apology loop is the most-used beat). The chosen line won on freshness (fake citations) + tightness (117 chars; ties go to fewer bytes).
