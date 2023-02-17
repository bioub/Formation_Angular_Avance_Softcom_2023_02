import { readFile, writeFile } from "node:fs/promises";

async function copyFile() {
  try {
    const buffer = await readFile('src.txt');
    await writeFile('dest.txt', buffer);
    console.log('Copy done');
  } catch (err) {
    console.log('Error : ' + err.message);
  }
}

copyFile();
