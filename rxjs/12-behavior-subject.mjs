//         interval(1000)
//              |
//            Subject
//        /              \
//    subscribe         subscribe

import { interval, map, startWith, take, Subject, BehaviorSubject } from "rxjs";

function countdown(startVal) {
  return interval(1000).pipe(
    map((val) => startVal - 1 - val),
    startWith(startVal),
    take(startVal + 1)
  );
}

const countdown$ = countdown(3);

const subject$ = new BehaviorSubject('Hello');

subject$.subscribe({
  next: (val) => {
    console.log("sub0", val);
  },
  complete: () => {
    console.log("sub0 complete");
  },
});

countdown$.subscribe(subject$);

subject$.subscribe({
  next: (val) => {
    console.log("sub1", val);
  },
  complete: () => {
    console.log("sub1 complete");
  },
});

setTimeout(() => {
  subject$.subscribe({
    next: (val) => {
      console.log("sub2", val);
    },
    complete: () => {
      console.log("sub2 complete");
    },
  });
}, 1500);

setTimeout(() => {
  subject$.subscribe({
    next: (val) => {
      console.log("sub3", val);
    },
    complete: () => {
      console.log("sub3 complete");
    },
  });
}, 3500);


