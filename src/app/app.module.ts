import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { ReactiveFormsModule } from '@angular/forms';
=======
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

>>>>>>> 687eed939d074bb2d0f98807bf930303bda95304
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { Usuario } from './models/usuario';
<<<<<<< HEAD
import {navBar} from './navBar/navBar.component';
import { ImcComponent } from './imc/imc.component';
import { ImcService } from './imc.service';
=======
import { FooterComponent } from './login/footer/footer.component';
import { MainComponent } from './login/main/main.component';
import { NotLoggedComponent } from './login/not-logged/not-logged.component';
import { NotRegisteredComponent } from './login/not-registered/not-registered.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { RegisterComponent } from './login/register/register.component';
import { ExcercisesComponent } from './excercises/excercises.component';
import { NavBarComponent } from './excercises/nav-bar/nav-bar.component';
import { InfoComponent } from './excercises/info/info.component';
import { SpecificInfoComponent } from './excercises/info/specific-info/specific-info.component';
import { SearchBarComponent } from './excercises/search-bar/search-bar.component';
import { RoutinesComponent } from './routines/routines.component';
import { SelectMuscleComponent } from './excercises/select-muscle/select-muscle.component';
import { PaginationComponent } from './excercises/pagination/pagination.component';

>>>>>>> 687eed939d074bb2d0f98807bf930303bda95304

@NgModule({
  declarations: [
    AppComponent,
    navBar,
    LoginComponent,
<<<<<<< HEAD
    RegisterComponent,
    ImcComponent,
=======
    FooterComponent,
    MainComponent,
    NotLoggedComponent,
    NotRegisteredComponent,
    SignInComponent,
    RegisterComponent,
    ExcercisesComponent,
    NavBarComponent,
    InfoComponent,
    SpecificInfoComponent,
    SearchBarComponent,
    RoutinesComponent,
    SelectMuscleComponent,
    PaginationComponent,
    
>>>>>>> 687eed939d074bb2d0f98807bf930303bda95304
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule,
=======
>>>>>>> 687eed939d074bb2d0f98807bf930303bda95304
    FormsModule,
    HttpClientModule
  ],
  providers: [ImcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
