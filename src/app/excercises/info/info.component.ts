import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExcerciseService } from 'src/app/excercise.service';
import { ExerciseDataService } from 'src/app/exercise-data-service.service';
import { Excercise } from 'src/app/models/excercise';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{
  excerciseList: Array<Excercise>=[];
  private exerciseSubscription: Subscription = new Subscription;

  
  constructor(private excerciseService: ExcerciseService,private exerciseDataService: ExerciseDataService) {
  }
  
  async ngOnInit(): Promise<void> {
    await this.excerciseService.loadExercises();
    this.excerciseList = this.exerciseDataService.getExercises();  
    
    this.exerciseSubscription = this.exerciseDataService.getExercisesSubject().subscribe(
      (exercises: Excercise[]) => {
        console.log('Data received in InfoComponent:', exercises);
        this.excerciseList = exercises;
      }
    );
  }

  // ngOnDestroy(): void {
  //   // Asegúrate de desuscribirte para evitar posibles problemas de memoria
  //   this.exerciseSubscription.unsubscribe();
  // }

  changeWindow(ejercicio: Excercise){
    const ejercicioSerializado = JSON.stringify(ejercicio);
    const nuevaURL = `specificInfo?parametro=${encodeURIComponent(ejercicioSerializado)}`;
    window.location.href = nuevaURL;
  }
}
