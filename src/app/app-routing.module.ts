import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chineseff4Component } from './chineseff4/chineseff4.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ExcercisesComponent } from './excercises/excercises.component';
import { SpecificInfoComponent } from './excercises/info/specific-info/specific-info.component';
import { RoutinesComponent } from './routines/routines.component';
import { BmiComponent } from './bmi/bmi.component';
import { SpecificInformationComponent } from './routines/specific-information/specific-information.component';
import { SpecificInfoUserComponent } from './chineseff4/specific-info-user/specific-info-user.component';

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
  },
  {
    path: 'specificInfo',
    component: SpecificInfoComponent
  },
  {
    path: 'routines',
    component: RoutinesComponent
  },
  {
    path: 'BMI',
    component: BmiComponent
  },
  {
    path: 'specificRoutine',
    component: SpecificInformationComponent
  },
  {
    path: 'specificInfoUser',
    component: SpecificInfoUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
