import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  @Output() add = new EventEmitter<string>();
  todo!: string;

  addTodo() {
    this.add.emit(this.todo);
  }

  log() {
    console.log('TodoFormComponent');
  }
}
