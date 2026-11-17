import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = `On the porch in the blue hour, an old woman is shelling peas into a tin bowl.
She does one pod at a time, and the peas fall with a small green sound.
Inside the house a pot lid lifts and settles, lifts and settles.
A dog sleeps with his chin on the step and one ear to the boards.
Nothing is being waited for. The bowl fills like the evening fills the yard,
slowly, and then all at once it is full.
She rests her hands in her lap and looks at nothing in particular.
The light goes on leaving, and nobody minds.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
