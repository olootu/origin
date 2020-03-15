import { TestBed, async, inject } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import {Todo} from '../todo.model';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [TodoService]
  }));

  it('should be created', () => {
    const service: TodoService = TestBed.get(TodoService);
    expect(service).toBeTruthy();
  });

  it('should ...', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));

  // xit('should return all todos', inject([TodoService], (service: TodoService) => {
   
  //   //service.getTodo();
  //  // expect(service.getTodo()).toEqual([]);
  // }));
});