import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})
export class TodoItemsComponent implements OnInit {
@Input() todoList: Todo[];
@Output() check = new EventEmitter();
@Output() removeItems = new EventEmitter();
@Output() updateTodo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeTodo(todo) {
    this.removeItems.emit(todo);
  }

  upDateTodo(todo) {
    this.updateTodo.emit(todo);
  }
  isChecked(todo) {
    this.check.emit(todo);
  }

}
