import { ChangeDetectionStrategy, Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3-list-item',
  templateUrl: './ex3-list-item.component.html',
  styleUrls: ['./ex3-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Ex3ListItemComponent implements OnInit, DoCheck {

  @Input() item = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log('Ex3ListItemComponent checked');
  }
}
