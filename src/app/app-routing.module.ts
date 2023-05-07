import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './components/todolist/todolist.component';
import { EditTodoListComponent } from './components/edit-todo-list/edit-todo-list.component';

const routes: Routes = [
  {
     path : "", component : TodolistComponent
  },
  {
    path : "task/:taskid", component : EditTodoListComponent
  },
  {
    path : "task", component : EditTodoListComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
