import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { navBar } from './navBar/navBar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ImcComponent } from './imc/imc.component';
=======
import { ExcercisesComponent } from './excercises/excercises.component';
import { SpecificInfoComponent } from './excercises/info/specific-info/specific-info.component';
>>>>>>> 687eed939d074bb2d0f98807bf930303bda95304

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
<<<<<<< HEAD
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'IMC',
    component: ImcComponent
  },
  {
    path:'bmi/:age/:weight/:height',
    component:ImcComponent
=======
    path: 'excercise',
    component: ExcercisesComponent
  },
  {
    path: 'specificInfo',
    component: SpecificInfoComponent
>>>>>>> 687eed939d074bb2d0f98807bf930303bda95304
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
