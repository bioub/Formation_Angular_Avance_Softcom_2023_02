import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.scss']
})
export class Ex4Component implements OnInit, DoCheck {

  cptCanBeDividedBy10 = 0;

  constructor() { }

  ngOnInit(): void {
    let cpt = 0;
    setInterval(() => {
      cpt++;
      if (cpt % 10 === 0) {
        this.cptCanBeDividedBy10 = cpt;
      }
    }, 1000);
  }

  ngDoCheck(): void {
    console.log('Ex4Component checked');

  }
}
