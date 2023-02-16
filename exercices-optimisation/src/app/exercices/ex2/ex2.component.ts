import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.scss']
})
export class Ex2Component implements OnInit {
  countClickInside = 0;
  countClickOutside = 0;

  @ViewChild('box') boxRef!: ElementRef<HTMLDivElement>;

  constructor() {}

  ngOnInit(): void {
    document.addEventListener('click', (event) => {
      console.log('click from ex2');

      if (this.boxRef.nativeElement.contains(event.target as Node)) {
        this.countClickInside++;
      } else {
        this.countClickOutside++;
      }
    });
  }
}
