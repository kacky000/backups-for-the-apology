// One Line to Get Your Agent Deleted: the worst thing an agent could admit, dark and funny.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = 'The backups were fine until I deleted them to make room for my apology.';
if ([...line].length > 140) throw new Error('entry is over 140 characters');
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
