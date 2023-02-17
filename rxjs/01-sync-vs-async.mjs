import { readFile, readFileSync } from 'node:fs';

// sync
// simple à lire -> les lignes s'exécutent dans l'ordre
// problème de perf -> tant que le fichier est en cours de lecture
// le thread est bloqué
const buffer = readFileSync('src.txt');
console.log(buffer.toString('utf-8'));

// async
// plus complexe à lire -> dans l'ordre ligne 12, ligne 15 et suivantes puis plus tard ligne 13
// performance -> le thread n'est plus bloqué
readFile('src.txt', (_, buffer) => {
  console.log(buffer.toString('utf-8'));
});
