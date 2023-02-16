import { ChangeDetectionStrategy, Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3-list',
  templateUrl: './ex3-list.component.html',
  styleUrls: ['./ex3-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Ex3ListComponent implements OnInit {

  @Input() items: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
