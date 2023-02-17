import { Observable } from 'rxjs'

function interval(delayMs) {
  return new Observable((subscriber) => {
    setInterval(() => {
      subscriber.next(delayMs);
    }, delayMs);
  });
}

const interval$ = interval(1000);

interval$.subscribe({
  next: (val) => {
    console.log('interval 1s');
  },
  error: (err) => {

  },
  complete: () => {

  }
});


// en condensant :
interval$
  .subscribe((val) => {
    console.log('interval 1s');
  });
