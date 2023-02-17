import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent implements OnInit {
  @Input() todos!: string[];

  constructor(private cd: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.todos.push('Item 4');
    //   this.cd.markForCheck();
    // }, 1000);
  }

  log() {
    console.log('TodosListComponent');
    if (this.todos.length === 4) {
      // throw new Error('test');
    }
  }
}
