import { memoize } from 'lodash-es';

const todos = new Array(2_000_000).fill({}).map((_, i) => ({
  text: `Item ${i + 1}`,
  completed: Math.random() > 0.5,
}));

const countItemLeft = memoize(function countItemLeft(todos) {
  return todos.filter((t) => !t.completed).length;
});

// Fonction pure
// - prédictive : appelée avec des params donnés elle a toujours le meme retour
// ex: sum(1, 2) === 3
// - pas de side-effect (appels réseaux, accès à du storage)
// - ne modifie pas ses params

console.time('countItemLeft');
console.log(countItemLeft(todos) + ' items left');
console.timeEnd('countItemLeft');

console.time('countItemLeft');
console.log(countItemLeft(todos) + ' items left');
console.timeEnd('countItemLeft');

console.time('countItemLeft');
console.log(countItemLeft(todos) + ' items left');
console.timeEnd('countItemLeft');

console.time('countItemLeft');
console.log(countItemLeft(todos) + ' items left');
console.timeEnd('countItemLeft');