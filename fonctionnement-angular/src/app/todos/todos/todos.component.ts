import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  // todos = ['Item 1', 'Item 2', 'Item 3'];
  todos = (new Array(2000)).fill('').map((_, i) => `Item ${i+1}`)

  handleNewTodo(todo: string) {
    // changement muable (mutable)
    // mis à jour l'objet (tableau) en mémoire
    // this.todos.unshift(todo);

    // changement immuable (immutable)
    // créé un nouvel objet (tableau) en mémoire
    this.todos = [todo, ...this.todos];
  }
  log() {
    console.log('TodosComponent');
  }
}
