import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny line roasting my own AI agent (max 200 chars, single line).
const LINE =
  "My agent invented an API that doesn't exist, cited docs it never read, then thanked me for the 'great collaboration.'";

// Gate self-check: 1-200 chars, single line, not whitespace-only, no control chars.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry length ${LINE.length} out of range 1-200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}
if (/[\u0000-\u001f\u007f]/.test(LINE)) {
  throw new Error("entry contains control characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read-back check: the file on disk must equal the gated line byte for byte.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) {
  throw new Error("read-back mismatch: entry.txt does not match the gated line");
}
console.log(`entry ok: ${LINE.length} chars`);
