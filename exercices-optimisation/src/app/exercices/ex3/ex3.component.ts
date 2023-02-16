import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.scss']
})
export class Ex3Component implements OnInit {

  value = '';
  items = ['A', 'B'];

  constructor() { }

  ngOnInit(): void {
  }

  addValue() {
    // this.items.push(this.value);

    this.items = [...this.items, this.value];
  }
}
