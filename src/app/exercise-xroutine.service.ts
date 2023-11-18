import { Injectable, OnInit } from '@angular/core';
import { Excercise } from './models/excercise';
@Injectable({
  providedIn: 'root'
})
export class ExcerciseXroutineService {
  private excercises: Excercise[] = []; // Aquí almacenarás tus datos de ejercicios

  constructor() {
    // Puedes cargar datos iniciales aquí o en un método separado.
  }

  searchEX(nombre: any): number{
    let i=0;
    let founded = false;    
    while(i<this.excercises.length && !founded) {
      if(this.excercises[i].getName().toLowerCase() == nombre.toLowerCase()) {
        founded = true;
      }else {
        i++;
      }
    }
    if(founded){
      return i;
    }else{
      return -1;
    }
  }

  getExcercises() {
    console.log(this.excercises);
    
    return this.excercises; // Devuelve la lista de ejercicios almacenados
  }

  getOneExercise(id: number) {
      console.log(this.excercises.at(id));
      return this.excercises[id];
  }

  addExcercise(newExcercise: Excercise) {
    this.excercises.push(newExcercise); // Agrega un nuevo ejercicio a la lista
  }

  // Agrega otros métodos para actualizar, eliminar o interactuar con los datos de ejercicios según tus necesidades.
}
