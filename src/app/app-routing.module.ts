import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ExcercisesComponent } from './excercises/excercises.component';
import { SpecificInfoComponent } from './excercises/info/specific-info/specific-info.component';
import { RoutinesComponent } from './routines/routines.component';
import { BmiComponent } from './bmi/bmi.component';
import { SpecificInformationComponent } from './routines/specific-information/specific-information.component';
import { SpecificInfoUserComponent } from './menu/specific-info-user/specific-info-user.component';
import { SettingsComponent } from './menu/specific-info-user/settings/settings.component';
import { PrivacyComponent } from './menu/specific-info-user/privacy/privacy.component';
import { PublicRoutinesShowComponent } from './routines/public-routines-show/public-routines-show.component';
import { CreateRoutineComponent } from './routines/create-routine/create-routine.component';
import { DeleteRoutineComponent } from './routines/delete-routine/delete-routine.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SingleMonthComponent } from './calendar/single-month/single-month.component';
import { MainComponent } from './login/main/main.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'submit',
    component: MainComponent
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
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: 'publicRoutinesShow',
    component: PublicRoutinesShowComponent
  },
  {
    path: 'createRoutine',
    component: CreateRoutineComponent
  },
  {
    path: 'deleteRoutine',
    component: DeleteRoutineComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'singleMonth',
    component: SingleMonthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
