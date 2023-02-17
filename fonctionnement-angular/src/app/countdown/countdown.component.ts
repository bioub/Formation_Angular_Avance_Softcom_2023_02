import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, map, startWith, switchMap, take, takeWhile } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, AfterViewInit {

  count = 10;

  @ViewChild('btn', { static: true }) btn!: ElementRef<HTMLButtonElement>;

  ngOnInit(): void {
    // console.log('ngOnInit', this.btn);
    fromEvent(this.btn.nativeElement, 'click')
      .pipe(
        switchMap(() => interval(1000).pipe(
          map((val) => 10 - 1 - val),
          startWith(10),
          take(11),
        ))
      ).subscribe((val) => {
        this.count = val;
      });
  }

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit', this.btn);
  }
}
