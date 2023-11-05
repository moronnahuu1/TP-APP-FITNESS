import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { Usuario } from './models/usuario';
import {navBar} from './navBar/navBar.component';
import { ImcComponent } from './imc/imc.component';
import { ImcService } from './imc.service';

@NgModule({
  declarations: [
    AppComponent,
    navBar,
    LoginComponent,
    RegisterComponent,
    ImcComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ImcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
