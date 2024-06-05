import { Component, OnInit, inject } from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';
import { ExcercisesComponent } from '../excercises/excercises.component';
import { ExcerciseService } from '../excercise.service';
import { Excercise } from '../models/excercise';
import { Usuario } from '../models/usuario';
import { ExerciseDataService } from '../exercise-data-service.service';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { routine } from '../models/routine';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user: Usuario = new Usuario("","","");
  mostrarDiv: boolean = false;

  async ngOnInit(): Promise<void> {
    const userSerializado = localStorage.getItem("oneUser");
    if(userSerializado){
      this.user = JSON.parse(userSerializado);
    }
    this.mostrarDiv = true;
  }
}