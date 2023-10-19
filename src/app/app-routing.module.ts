import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chineseff4Component } from './chineseff4/chineseff4.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: Chineseff4Component
  },
  {
    path: 'submit',
    component: Chineseff4Component
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
