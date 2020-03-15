import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';

import { environment } from '../../../environments/environment';

import {Todo} from '../todo.model';

import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

// Fake Server
const fakeBaseUrl = environment.fakeBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // GET all Todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(fakeBaseUrl + '/tasks/')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Cfreate a new Todo
  createTodo(todo: Todo) {
    if (!todo.id) {
      todo.id = uuidv4();
    }
    return this.http
    .post(fakeBaseUrl + '/tasks/', todo)
    .pipe(
      map(response => {
        return new Todo(response);
      }),
      catchError(this.handleError)
    )
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http
      .put(fakeBaseUrl + '/tasks/' + todo.id, todo)
      .pipe(
        map(response => {
          return new Todo(response);
        }),
        catchError(this.handleError)
      )
  }

  deleteTodoById(todoId: number): Observable<null> {
    return this.http
    .delete(fakeBaseUrl + '/tasks/' + todoId)
    .pipe(
      map(response => null),
      catchError(this.handleError)
    )
  }

   // Error handling
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
