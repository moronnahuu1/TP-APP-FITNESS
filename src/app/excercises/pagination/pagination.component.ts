import { Component } from '@angular/core';
import { ExerciseDataService } from 'src/app/exercise-data-service.service';
import { Excercise } from 'src/app/models/excercise';
import { ExcerciseService } from 'src/app/excercise.service';
import { of } from 'rxjs';
import { SelectMuscleComponent } from '../select-muscle/select-muscle.component';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  constructor(private exerciseDataService: ExerciseDataService, private excerciseService :ExcerciseService) {
  }
  
  // async pagination (){ 
  //   this.exerciseDataService.resetExercises();
  //   this.exerciseDataService.setExercises(this.exerciseService.getExcercises());
  // }

    async previousPage (){
    let offset = this.excerciseService.getOffset();
    if(offset > 1){ //Verificamos que no estemos en una pagina menor a la principal
      this.exerciseDataService.resetExercises();
      this.excerciseService.decrementOffset();
      console.log('OFFSET:'+this.excerciseService.getOffset());
      let typeMuscle = this.excerciseService.getActualMuscle();
      await this.excerciseService.loadExercises(typeMuscle);
      this.exerciseDataService.setExercises(this.excerciseService.getExcercises());

      console.log('Nuevos ejercicios'+this.excerciseService.getExcercises());
    } 
  }

   async nextPage (){
    let offset = this.excerciseService.getOffset();
    console.log('OFFSET:'+offset);
    if(offset < 1000){ //Verificamos que no estemos en una pagina menor a la principal
      this.exerciseDataService.resetExercises();
      this.excerciseService.incrementOffset();
      console.log('OFFSET:'+this.excerciseService.getOffset());
      let typeMuscle = this.excerciseService.getActualMuscle();
      await this.excerciseService.loadExercises(typeMuscle);
      this.exerciseDataService.setExercises(this.excerciseService.getExcercises());

      console.log('Nuevos ejercicios'+this.excerciseService.getExcercises());
    } 
  } 

  

}
