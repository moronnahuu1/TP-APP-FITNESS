import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { Usuario } from './models/usuario';
import { FooterComponent } from './login/footer/footer.component';
import { MainComponent } from './login/main/main.component';
import { MenuComponent } from './menu/menu.component';
import { ExcercisesComponent } from './excercises/excercises.component';
import { InfoComponent } from './excercises/info/info.component';
import { SpecificInfoComponent } from './excercises/info/specific-info/specific-info.component';
import { SearchBarComponent } from './excercises/search-bar/search-bar.component';
import { RoutinesComponent } from './routines/routines.component';
import { SelectMuscleComponent } from './excercises/select-muscle/select-muscle.component';
import { PaginationComponent } from './excercises/pagination/pagination.component';
import { NavBarLoggedComponent } from './nav-bar-logged/nav-bar-logged.component';
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
import { NotLoggedComponent } from './not-logged/not-logged.component';
import { ExerciseShowComponent } from './menu/exercise-show/exercise-show.component';
import { RoutineShowComponent } from './menu/routine-show/routine-show.component';
import { LoginShowComponent } from './menu/login-show/login-show.component';
import { WelcomeUserComponent } from './menu/welcome-user/welcome-user.component';
import { WelcomeNotLoggedComponent } from './menu/welcome-not-logged/welcome-not-logged.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    LoginComponent,
    FooterComponent,
    MainComponent,
    ExcercisesComponent,
    InfoComponent,
    SpecificInfoComponent,
    SearchBarComponent,
    RoutinesComponent,
    SelectMuscleComponent,
    PaginationComponent,
    NavBarLoggedComponent,
    BmiComponent,
    SpecificInformationComponent,
    SpecificInfoUserComponent,
    SettingsComponent,
    PrivacyComponent,
    PublicRoutinesShowComponent,
    CreateRoutineComponent,
    DeleteRoutineComponent,
    CalendarComponent,
    SingleMonthComponent,
    NotLoggedComponent,
    ExerciseShowComponent,
    RoutineShowComponent,
    LoginShowComponent,
    WelcomeUserComponent,
    WelcomeNotLoggedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
