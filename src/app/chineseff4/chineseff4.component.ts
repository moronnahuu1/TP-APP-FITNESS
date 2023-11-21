import { Component, OnInit } from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';
import { ExcercisesComponent } from '../excercises/excercises.component';
import { ExcerciseService } from '../excercise.service';
import { Excercise } from '../models/excercise';
import { Usuario } from '../models/usuario';
@Component({
  selector: 'app-chineseff4',
  templateUrl: './chineseff4.component.html',
  styleUrls: ['./chineseff4.component.css']
})
export class Chineseff4Component implements OnInit {
  excerciseList: Array<Excercise> = [];
  ngOnInit(): void {
    const userSerializado = localStorage.getItem("oneUser");
    let user: Usuario = new Usuario("","","");
    if(userSerializado){
      user = JSON.parse(userSerializado);
      this.displayBlock("logged");
      this.displayNone("notLogged");
    }else {

    }
  }
  displayBlock(name: string){
    let miDiv = document.getElementById(name);
    if(miDiv){
      miDiv.style.display = 'block';
    }
  }
  displayNone(name: string){
    let miDiv = document.getElementById(name);
    if(miDiv){
      miDiv.style.display = 'none';
    }
  }
}