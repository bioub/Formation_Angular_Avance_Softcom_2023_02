import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.scss'],
})
export class Ex1Component implements OnInit, OnDestroy {
  countClickInside = 0;
  countClickOutside = 0;

  @ViewChild('box') boxRef!: ElementRef<HTMLDivElement>;

  constructor() {}

  handleDocumentClick = (event: MouseEvent) => {
    console.log('click from ex1');

    if (this.boxRef.nativeElement.contains(event.target as Node)) {
      this.countClickInside++;
    } else {
      this.countClickOutside++;
    }
  }

  ngOnInit(): void {
    document.addEventListener('click', this.handleDocumentClick);
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.handleDocumentClick);
  }
}
