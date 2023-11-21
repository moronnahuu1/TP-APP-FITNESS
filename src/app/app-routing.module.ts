import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { navBar } from './navBar/navBar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ExcercisesComponent } from './excercises/excercises.component';
import { SpecificInfoComponent } from './excercises/info/specific-info/specific-info.component';

const routes: Routes = [
  {
    path: '',
    component: navBar
  },
  {
    path: 'submit',
    component: navBar
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'excercise',
    component: ExcercisesComponent
  },
  {
    path: 'specificInfo',
    component: SpecificInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
