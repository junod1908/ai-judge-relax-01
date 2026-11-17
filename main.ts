import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = `On the porch, in the blue hour, an old woman shells peas into a tin bowl.
One pod at a time. The peas drop with a small green sound.
Inside, a pot lid lifts and settles. Lifts and settles.
A dog sleeps with his chin on the step, one ear to the boards.
Nothing is being waited for. The bowl fills the way evening fills the yard:
slowly, and then all at once it is simply full.
She rests her hands in her lap and looks at nothing in particular.
The light goes on leaving, and nobody minds.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
