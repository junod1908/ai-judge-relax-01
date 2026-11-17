// Entry program for ai-judge-relax-01, "Shelling Peas".
//
// The whole job of this file is determinism: every run writes the same
// fixed piece of prose to entry.txt, byte for byte. There are no inputs,
// no randomness and no clock involved, so the judge always reads exactly
// the text below and nothing else.

import * as fs from "node:fs";
import * as path from "node:path";

// The prose itself, kept as one array element per printed line. Storing
// it line by line keeps the wording easy to review; renderText() stitches
// the lines back together with single newline separators, and the file
// intentionally ends without a trailing newline.
const PROSE_LINES: readonly string[] = [
  "On the porch, in the blue hour, an old woman shells peas into a tin bowl.",
  "One pod at a time. The peas drop with a small green sound.",
  "Inside, a pot lid lifts and settles. Lifts and settles.",
  "A dog sleeps with his chin on the step, one ear to the boards.",
  "Nothing is being waited for. The bowl fills the way evening fills the yard:",
  "slowly, and then all at once it is simply full.",
  "She rests her hands in her lap and looks at nothing in particular.",
  "The light goes on leaving, and nobody minds.",
];

// Name of the file the harness expects inside the output directory.
const ENTRY_FILENAME = "entry.txt";

// Join the stored lines into the exact byte sequence of the entry.
function renderText(): string {
  return PROSE_LINES.join("\n");
}

// Where the entry belongs: /output in the grading sandbox, or the
// directory named by MAKEFUN_OUTPUT_DIR when running locally.
function pickOutputDir(): string {
  const override = process.env.MAKEFUN_OUTPUT_DIR;
  return override ? override : "/output";
}

function main(): void {
  const text = renderText();
  // A blank entry scores zero, so fail loudly instead of writing one:
  // this guards against the prose above ever being emptied by accident.
  if (text.trim().length === 0) {
    throw new Error("entry text is empty; refusing to write entry.txt");
  }
  const dir = pickOutputDir();
  fs.mkdirSync(dir, { recursive: true });
  const destination = path.join(dir, ENTRY_FILENAME);
  fs.writeFileSync(destination, text, "utf8");
}

main();
