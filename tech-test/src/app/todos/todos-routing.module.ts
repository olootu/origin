import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoListComponent} from './to-do-list/to-do-list.component';
import {TodosResolver} from './todos.resolver'
import { TodosModule } from './todos.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
   pathMatch: 'full'
  },

  {
  path: 'todos',
  component: ToDoListComponent,
  resolve: {
    todos: TodosResolver
  }
  },

  {
    path: '**',
    redirectTo: 'todos',
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: [ TodosResolver ]
})
export class TodosRoutingModule { }
