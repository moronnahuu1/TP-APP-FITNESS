import { Injectable, OnInit } from '@angular/core';
import { Excercise } from './models/excercise';
import { ExerciseDataService } from './exercise-data-service.service';
@Injectable({
  providedIn: 'root'
})
export class ExcerciseService {
  private excercises: Excercise[] = []; // Aquí almacenarás tus datos de ejercicios
  private defaultExerciseType = 'abdominals'; // Cambia esto al valor por defecto que desees
  offset = 0;

  constructor(private excerciseDataService : ExerciseDataService) {
    // Puedes cargar datos iniciales aquí o en un método separado.
  }

    async loadExercises(exerciseType?: string, newOffset?:number): Promise<void> {
  
    if(exerciseType){
      this.defaultExerciseType = exerciseType;
    }

    if(newOffset){
      this.offset = newOffset;
    }
    const baseUrl = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises`;
    const url = `${baseUrl}?muscle=${this.defaultExerciseType}&offset=${this.offset}`;
    
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
      this.excerciseDataService.notifyDataChanged();
    } catch (error) {
      console.error(error);
    }
  }

  cargarDatosIniciales() {
    // Simula la carga de datos iniciales, puedes cargarlos desde un archivo JSON, una API, etc.
    this.excercises = [
    ];
  }

  searchEX(nombre: any): Array<Excercise>{
    let ejerciciosEncontrados: Array<Excercise>=[];
    let i=0;  
    while(i<this.excercises.length) {
      if(this.excercises[i].getName().indexOf(nombre) >0) {
        console.log('Ejercicio:'+this.excercises[i].getName());
        ejerciciosEncontrados.push(this.excercises[i]);
      } 
        i++;
    }
    return ejerciciosEncontrados;
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

  getOffset(){
    return this.offset;
  }

  incrementOffset(){
    this.offset ++;
  }

  decrementOffset(){
    this.offset --;
  }

  getActualMuscle(){
    return this.defaultExerciseType;
  }

  // Agrega otros métodos para actualizar, eliminar o interactuar con los datos de ejercicios según tus necesidades.
}
