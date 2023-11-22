import { Component } from '@angular/core';
import { ExcerciseService } from 'src/app/excercise.service';
import { Excercise } from 'src/app/models/excercise';
import { ExerciseDataService } from 'src/app/exercise-data-service.service';
@Component({
  selector: 'app-select-muscle',
  templateUrl: './select-muscle.component.html',
  styleUrls: ['./select-muscle.component.css']
})
export class SelectMuscleComponent {
  // constructor(private exerciseService: ExcerciseService) { }
  constructor(private exerciseDataService: ExerciseDataService,private exerciseService: ExcerciseService) { }

  excerciseList: Array<Excercise>=[];

  async ngOnInit(): Promise<void> {
    await this.exerciseService.loadExercises();
    this.exerciseDataService.setExercises(this.exerciseService.getExcercises());
  }

  async handleButtonClick(event: MouseEvent): Promise<void> {
    this.exerciseService.resetOffset();
    const target = event.target as HTMLLabelElement;
    const innerHtml = target.innerHTML;
    console.log('target.innerHTML'+target.innerHTML);
    
    this.exerciseDataService.resetExercises();
    // Llama a la función del servicio pasando el innerHTML como parámetro
    await this.exerciseService.loadExercises(innerHtml.toLocaleLowerCase());   
    this.exerciseDataService.setExercises(this.exerciseService.getExcercises());
  }
}
