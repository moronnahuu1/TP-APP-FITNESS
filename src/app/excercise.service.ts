import { Injectable } from '@angular/core';
import { Excercise } from './models/excercise';
@Injectable({
  providedIn: 'root'
})
export class ExcerciseService {
  private excercises: Excercise[] = []; // Aquí almacenarás tus datos de ejercicios

  constructor() {
    // Puedes cargar datos iniciales aquí o en un método separado.
    this.cargarDatosIniciales();
  }

  cargarDatosIniciales() {
    // Simula la carga de datos iniciales, puedes cargarlos desde un archivo JSON, una API, etc.
    this.excercises = [
    ];
  }

  getExcercises() {
    return this.excercises; // Devuelve la lista de ejercicios almacenados
  }

  addExcercise(newExcercise: Excercise) {
    this.excercises.push(newExcercise); // Agrega un nuevo ejercicio a la lista
  }

  // Agrega otros métodos para actualizar, eliminar o interactuar con los datos de ejercicios según tus necesidades.
}
