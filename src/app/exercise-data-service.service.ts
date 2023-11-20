import { Injectable } from '@angular/core';
import { Excercise } from './models/excercise';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class ExerciseDataService {
  private exercises: Excercise[] = [];
  private exercisesSubject = new Subject<Excercise[]>();

  getExercises(): Excercise[] {
    console.log('recibido: '+this.exercises);
    return this.exercises;
  }

  setExercises(exercises: Excercise[]): void {
    this.exercises = exercises;
    console.log('obtenido: '+this.exercises);
    this.exercisesSubject.next(exercises);
  }

  getExercisesSubject(): Subject<Excercise[]> {
    return this.exercisesSubject;
  }

  resetExercises(){
    this.exercises.splice(0,this.exercises.length);
  }
}
