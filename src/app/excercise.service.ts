import { Injectable, OnInit } from '@angular/core';
import { Excercise } from './models/excercise';
@Injectable({
  providedIn: 'root'
})
export class ExcerciseService {
  private excercises: Excercise[] = []; // Aquí almacenarás tus datos de ejercicios

  constructor() {
    // Puedes cargar datos iniciales aquí o en un método separado.
  }

   async loadExcercises(): Promise<void> {
    const url = 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9199c93dfdmshb81cf20b6d2cf40p104aeajsn2274f1c47343',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const data = result;
      for (let i = 0; i < result.length; i++) {
        if (data[i] != null) {
          const difficulty: string = data[i].difficulty;
          const equipment: string = data[i].equipment;
          const instructions: string = data[i].instructions;
          const muscle: string = data[i].muscle;
          const name: string = data[i].name;
          const type: string = data[i].type;
          const exercise = new Excercise(difficulty, equipment, instructions, muscle, name, type, i);
          this.addExcercise(exercise);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  cargarDatosIniciales() {
    // Simula la carga de datos iniciales, puedes cargarlos desde un archivo JSON, una API, etc.
    this.excercises = [
    ];
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
