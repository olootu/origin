import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from './todo.model'

@Pipe({
  name: 'todosearch'
})
export class TodosearchPipe implements PipeTransform {

  transform(items: Todo[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( todos => {
          return todos.label.toLowerCase().includes(searchText);
        });
      }
}
