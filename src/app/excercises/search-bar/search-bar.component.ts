import { Component, OnInit } from '@angular/core';
import { ExcerciseService } from 'src/app/excercise.service';
import { Excercise } from 'src/app/models/excercise';
import { ExerciseDataService } from 'src/app/exercise-data-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  constructor(private excerciseService: ExcerciseService, private exerciseDataService: ExerciseDataService) {
  }
  async ngOnInit(): Promise<void> {
    ///await this.excerciseService.loadExcercises();
    const buscar = document.getElementById("findOut");
    const miInput = document.getElementById('search') as HTMLInputElement;
    buscar?.addEventListener('click', () => this.buscarEjercicio(miInput));
  }
  

  buscarEjercicio(miInput: HTMLInputElement){
    const exercise = miInput.value;    
    let ejerciciosEncontrados: Array<Excercise> = [];
    ejerciciosEncontrados = this.excerciseService.searchEX(exercise);
    console.log('Ejercicios encontrados: '+ejerciciosEncontrados);
    this.exerciseDataService.resetExercises();
    this.exerciseDataService.setExercises(ejerciciosEncontrados);
    // console.log("POSITION: "+ejerciciosEncontrados.values);
    
    if(ejerciciosEncontrados.length > 0) {
      console.log('Mostrar ejercicios...');
    }
  }

}
