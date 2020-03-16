import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { TodoService } from './todo.service';
import { ApiMockService } from './api-mock.service';

describe('TodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [
      {
        provide: TodoService,
        useClass: ApiMockService

      }
    ]
  }));

  it('should be created', () => {
    const service: TodoService = TestBed.get(TodoService);
    expect(service).toBeTruthy();
  });

  it('should inject', inject([ApiMockService], (service: ApiMockService) => {
    expect(service).toBeTruthy();
  }));

  it('should return all todos', inject([ApiMockService], (service: ApiMockService) => {
    const getAll = service.getTodos();
    expect(getAll).not.toBeNull();
  }));

  it('should delete all todos', inject([ApiMockService], (service: ApiMockService) => {
    const delet = service.deleteTodo(1);
   expect(delet).toBeNull();
  }));

  it('should update todo with the id', inject([ApiMockService], (service: ApiMockService) => {
    service.updateTodo(1).subscribe(data => {
      expect(data.label).toEqual('Todo Item2');
    });
  }));
});