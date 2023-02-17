//         interval(1000)
//        /              \
//      sub              sub

import { interval, map, startWith, take } from "rxjs";

function countdown(startVal) {
  return interval(1000).pipe(
    map((val) => startVal - 1 - val),
    startWith(startVal),
    take(startVal + 1)
  );
}

const countdown$ = countdown(3);

countdown$.subscribe({
  next: (val) => {
    console.log("sub1", val);
  },
  complete: () => {
    console.log("sub1 complete");
  },
});

setTimeout(() => {
  countdown$.subscribe({
    next: (val) => {
      console.log("sub2", val);
    },
    complete: () => {
      console.log("sub2 complete");
    },
  });
}, 1500);
