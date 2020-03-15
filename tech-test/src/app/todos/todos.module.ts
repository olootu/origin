import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { TodosRoutingModule } from './todos-routing.module';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TodoService } from './services/todo.service';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodosearchPipe } from './todosearch.pipe';
import { TodoItemsComponent } from './todo-items/todo-items.component';


@NgModule({
  declarations: [ToDoListComponent, AddTodoComponent, TodosearchPipe, TodoItemsComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule
  ],
  providers: [TodoService],
})
export class TodosModule { }
