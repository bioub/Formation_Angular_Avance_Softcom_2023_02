import { readFile, writeFile } from "node:fs/promises";

try {
  const buffer = await readFile('src.txt');
  await writeFile('dest.txt', buffer);
  console.log('Copy done');
} catch (err) {
  console.log('Error : ' + err.message);
}

// Top level await (ES2022)
// Possibilité de placer un await sans async si module ESM (import/export)
