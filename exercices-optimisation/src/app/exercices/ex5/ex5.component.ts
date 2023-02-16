import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex5',
  templateUrl: './ex5.component.html',
  styleUrls: ['./ex5.component.scss'],
})
export class Ex5Component implements OnInit {

  nb1 = '10';
  nb2 = '4';

  constructor() {}

  ngOnInit(): void {}

  double(nb: string | number) {
    console.log('double called');
    return Number(nb) * 2;
  }

  triple(nb: string | number) {
    console.log('triple called');
    return Number(nb) * 2;
  }
}
