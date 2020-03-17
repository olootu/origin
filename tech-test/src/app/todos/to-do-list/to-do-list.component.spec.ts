import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListComponent } from './to-do-list.component';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { TodoItemsComponent } from '../todo-items/todo-items.component';
import { TodosearchPipe } from '../todosearch.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

describe('ToDoListComponent', () => {
  let component: ToDoListComponent;
  let fixture: ComponentFixture<ToDoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoListComponent, AddTodoComponent, TodoItemsComponent, TodosearchPipe ],
      imports: [FormsModule, HttpClientModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({
              todos: []
            })
          }
        }
      ]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
