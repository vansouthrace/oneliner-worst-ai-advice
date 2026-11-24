import fs from 'node:fs';
const ENTRY = "Forgetting your passwords? Just email them to yourself, that way you'll never lose them, and neither will anyone else.";
fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', ENTRY, 'utf8');
