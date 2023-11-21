import { Component } from '@angular/core';
import { Excercise } from '../models/excercise';
import { Block } from '@angular/compiler';
import { routine } from '../models/routine';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.css']
})
export class RoutinesComponent {
  urlParams = new URLSearchParams(window.location.search);
  ejercicioSerializado = this.urlParams.get('parametro');
  routinesList: routine[] = [];
  async ngOnInit(): Promise<void> {
    if(this.routinesList.length>0){
      let miDiv = document.getElementById("noRoutines");
    if(miDiv){
      miDiv.style.display = 'none';
    }
    }else {
      let miDiv = document.getElementById("routinesFounded");
    if(miDiv){
      miDiv.style.display = 'none';
    }
    }
  if (this.ejercicioSerializado) { 
    const exercise: Excercise = JSON.parse(decodeURIComponent(this.ejercicioSerializado));  
    console.log(exercise.name);
    
  }
  }
  crearRutina(){
    let miDiv = document.getElementById("routinesFounded");
    if(miDiv){
      miDiv.style.display = 'none';
    }
    miDiv = document.getElementById("noRoutines");
    if(miDiv){
      miDiv.style.display = 'none';
    }
    miDiv = document.getElementById("create");
    if(miDiv){
      miDiv.style.display = 'block';
    }
  }
}
