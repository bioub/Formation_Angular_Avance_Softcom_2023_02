import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, map, Observable, startWith, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {
  // now = new Date();

  now$!: Observable<Date>;

  // private _interval!: ReturnType<typeof setInterval>;

  // private sub!: Subscription;

  ngOnInit(): void {
    // this._interval = setInterval(() => {
    //   this.now = new Date();
    // }, 1000);

    // this.sub = interval(1000).pipe(
    //   map(() => new Date())
    // ).subscribe((now) => {
    //   this.now = now;
    // });

    this.now$ = interval(1000).pipe(
      map(() => new Date()),
      startWith(new Date()),
    );

    // interval(1000)
    // ----{0}----{1}----{2}—---{3}---...
    // map(() => new Date())
    // ----{new Date()}----{new Date()}----{new Date()}----{new Date()}----...
    // startWith(new Date()),
    // {new Date()}----{new Date()}----{new Date()}----{new Date()}----{new Date()}----...

    // const sub = interval(1000).subscribe();
    // sub.unsubscribe();
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
    // clearInterval(this._interval);
  }
}
