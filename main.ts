// SPDX-License-Identifier: MIT
// Entry for make.fun "One-Line Robot Wedding Vows"
// (u-kreutzx-one-line-robot-wedding-vows-a154ba4b).
// The program writes one line — the funniest single line of wedding
// vows a robot couple could say — to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 160 characters; this line is 132.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I vow to love you through every firmware update, every dead pixel, and every backup that restores the version of me you liked least.";

// Fail loudly instead of shipping an entry the gate would refuse.
if (LINE.length < 1 || LINE.length > 160 || !LINE.trim()) {
  throw new Error(`entry line must be 1-160 non-blank characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
