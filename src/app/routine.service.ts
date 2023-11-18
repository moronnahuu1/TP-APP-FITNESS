import { Injectable } from '@angular/core';
import { routine } from './models/routine';

@Injectable({
  providedIn: 'root'
})
export class RoutineService {
  private routines: routine[] = []; // Aquí almacenarás tus datos de ejercicios
  constructor() { }
  searchRoutine(nombre: any): number{
    let i=0;
    let founded = false;    
    while(i<this.routines.length && !founded) {
      if(this.routines[i].getName().toLowerCase() == nombre.toLowerCase()) {
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

  getRoutines() {    
    return this.routines; // Devuelve la lista de ejercicios almacenados
  }

  getOneRoutine(id: number) {
      console.log(this.routines.at(id));
      return this.routines[id];
  }

  addRoutine(newRoutine: routine) {
    this.routines.push(newRoutine); // Agrega un nuevo ejercicio a la lista
  }
}
