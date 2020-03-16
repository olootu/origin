import { Injectable } from '@angular/core';
import { Todo } from '../todo.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiMockService {

  constructor() { }

  public getTodos(): Observable<Todo[]> {
    return of([
      new Todo({id: 1, label: 'Todo Item1',  description: 'My Todo', category: 'General',done: false})
    ]);
  }

  public createTodo(todoId: number): Observable<Todo> {
    return of(
      new Todo({id: 1, label: 'Todo Item1',  description: 'My Todo', category: 'General',done: false})
    );
  }

  public updateTodo(todoId: number): Observable<Todo> {
    return of(
      new Todo({id: 1, label: 'Todo Item2',  description: 'My Todo', category: 'General',done: false})
    );
  }

  public deleteTodo(todoId: number): Observable<null> {
    return null
  }
}