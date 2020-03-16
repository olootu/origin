import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemsComponent } from './todo-items.component';
import { FormsModule } from '@angular/forms';
import { TodosearchPipe } from '../todosearch.pipe';

describe('TodoItemsComponent', () => {
  let component: TodoItemsComponent;
  let fixture: ComponentFixture<TodoItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemsComponent, TodosearchPipe],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
