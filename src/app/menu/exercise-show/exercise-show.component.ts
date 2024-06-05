import { Component, OnInit, inject } from '@angular/core';
import { ExcerciseService } from 'src/app/excercise.service';
import { Excercise } from 'src/app/models/excercise';

@Component({
  selector: 'app-exercise-show',
  templateUrl: './exercise-show.component.html',
  styleUrls: ['./exercise-show.component.css']
})
export class ExerciseShowComponent implements OnInit{
  excerciseList: Array<Excercise> = [];
  excerciseService = inject(ExcerciseService);
  mostrarDiv: boolean = false;

  async ngOnInit(): Promise<void> {
    await this.excerciseService.loadExercises();
    this.excerciseList = this.excerciseService.getExcercises();  
    this.excerciseList.splice(0,3);
    this.mostrarDiv = true;
  }
  getRandomExercises(numExercises: number): Excercise[] {
    // Clona la lista original para no afectar el orden original
    const shuffledList = this.excerciseList;
  
    // Utiliza el algoritmo de Fisher-Yates para mezclar la lista
    for (let i = shuffledList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
    }
  
    // Devuelve los primeros numExercises elementos de la lista mezclada
    return shuffledList.slice(0, numExercises);
  }
  changeExerciseWindow(ejercicio: Excercise){
    const ejercicioSerializado = JSON.stringify(ejercicio);
    const nuevaURL = `specificInfo?parametro=${encodeURIComponent(ejercicioSerializado)}`;
    window.location.href = nuevaURL;
  }
}
