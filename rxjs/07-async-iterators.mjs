import { setTimeout, setInterval } from 'node:timers/promises'

await setTimeout(1000);
console.log('setTimeout 1s');

// ES2018
for await (const val of setInterval(1000)) {
  console.log('setInterval 1s');
}
