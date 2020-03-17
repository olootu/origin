import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';
import { TodoService } from './services/todo.service';

@Injectable()
export class TodosResolver implements Resolve<Observable<Todo[]>> {

  constructor(private todoService: TodoService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo[]> {
    return this.todoService.getTodos();
  }

}