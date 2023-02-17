// setTimeout(() => {
//   console.log('1s');
// }, 1000);

function timeout(delayMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delayMs);
    }, delayMs);
  });
}

timeout(1000)
  .then((delayMs) => {
    console.log('timeout ' + delayMs + 'ms');
  });

// await timeout(1000);
// console.log('1s');

function interval(delayMs) {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      resolve(delayMs);
    }, delayMs);
  });
}

interval(1000)
  .then((delayMs) => {
    console.log('interval ' + delayMs + 'ms');
  });
