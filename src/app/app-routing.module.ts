import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { navBar } from './navBar/navBar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ImcComponent } from './imc/imc.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
