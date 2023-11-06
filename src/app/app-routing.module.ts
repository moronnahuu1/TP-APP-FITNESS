import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chineseff4Component } from './chineseff4/chineseff4.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ExcercisesComponent } from './excercises/excercises.component';

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
    path: 'excercise',
    component: ExcercisesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
