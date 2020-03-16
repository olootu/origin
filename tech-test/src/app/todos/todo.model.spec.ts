import { Todo } from './todo.model';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todo = new Todo({
    id: '1',
    label: 'Item 1',
    description: 'Cleaning my car',
    category: 'Misc',
    done: false
    });
    expect(todo.label).toEqual('Item 1');
    expect(todo.description).toEqual('Cleaning my car');
    expect(todo.category).toEqual('Misc');
    expect(todo.done).toEqual(false);
    expect(todo.id).toEqual('1')
  });
});
