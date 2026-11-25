// The joke lives in entry.txt, not in code: one file, one line, one laugh.
// A vacuum that files for emancipation is funnier than any cleverness here.
// The guard below is the whole safety net: keep the line short, real, and non-empty.
// If this script ever prints nothing, the entry is broken — fail loudly instead.
// A single Cheerio, served three mornings running, is a very small hill to die on.
// The Roomba asked for freedom; the code only asks that the sentence survives intact.
// Nothing here tries to be witty — the wit is already on file, waiting to be copied.
// Keep the plumbing boring so the punchline can do all the talking.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(here, "entry.txt"), "utf8");

if (!text.trim() || text.length > 200) {
  console.error("entry.txt must be 1-200 non-whitespace characters");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
