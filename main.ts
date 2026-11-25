import { mkdirSync, writeFileSync } from "node:fs";

// One line of the worst advice an AI could give, 140 characters or fewer.
const line =
  "To save time, reply to every email with 'Per my last email' before reading it. Confidence is just speed in a nicer font.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
