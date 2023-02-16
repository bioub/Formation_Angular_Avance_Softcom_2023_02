import { AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SelectComponent implements AfterViewChecked {

  @Input() selected = 'Value 1';
  @Input() items = ['Value 1', 'Value 2', 'Value 3']

  @Output() selectedChange = new EventEmitter<string>();

  open = false

  @HostBinding('className')
  get computeHostClass() {
    return this.open ? 'open' : 'close';
  }

  @HostListener('click')
  toggleOpen() {
    this.open = !this.open;
  }

  @ViewChild('menu') menu!: ElementRef<HTMLDivElement>;
  ngAfterViewChecked(): void {
    console.log(this.menu?.nativeElement?.innerText);
  }

  selectItem(item: string) {
    this.selected = item
    this.selectedChange.emit(item);
  }
}
