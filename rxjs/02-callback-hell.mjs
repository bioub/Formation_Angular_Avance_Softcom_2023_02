import { readFile, readFileSync, writeFile, writeFileSync } from 'node:fs';

// sync
try {
  const buffer = readFileSync('src.txt');
  writeFileSync('dest.txt', buffer);
  console.log('Copy done');
} catch (err) {
  console.log('Error : ' + err.message);
}

// pile d'appel
// ^
// |
// |
// |trycatch { [readFileSync          ][writeFileSync          ][log] }
// +-------------------------------------------------------------------------> temps

// async
// callback hell / pyramid of doom
readFile('src.txt', (err, buffer) => {
  if (err) {
    console.log('Error : ' + err.message);
  } else {
    writeFile('dest.txt', buffer, (err) => {
      if (err) {
        console.log('Error : ' + err.message);
      } else {
        console.log('Copy done');
      }
    });
  }
});

// pile d'appel
// ^
// |
// |                          [writeFile]                [log]
// |[readFile] ⟳              [cbRf     ] ⟳              [cbWf]
// +--------------------------3ms------------------------6ms-----------------------> temps

// Event loop
// macrotask callbackSuccessReadfile (cbRf)

// file d'attente de task (0ms) :
// file d'attente de task (3ms) : cbRf
