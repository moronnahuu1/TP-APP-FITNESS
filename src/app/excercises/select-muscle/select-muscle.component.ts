import { Component } from '@angular/core';
import { ExcerciseService } from 'src/app/excercise.service';

@Component({
  selector: 'app-select-muscle',
  templateUrl: './select-muscle.component.html',
  styleUrls: ['./select-muscle.component.css']
})
export class SelectMuscleComponent {
  constructor(private exerciseService: ExcerciseService) { }

  async handleButtonClick(event: MouseEvent): Promise<void> {
    const target = event.target as HTMLLabelElement;
    const innerHtml = target.innerHTML;
    console.log('target.innerHTML'+target.innerHTML);

    // Llama a la función del servicio pasando el innerHTML como parámetro
    await this.exerciseService.loadExercises(innerHtml);
  }
}
