
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AddMessageComponent} from './user/add-message/add-message.component';
import {ListComponent} from './user/list/list.component';
import {EditMessageComponent} from './user/edit-message/edit-message.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-message', component: AddMessageComponent },
  { path: 'list', component: ListComponent },
  { path: 'edit-message', component: EditMessageComponent },
  {path : '', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
