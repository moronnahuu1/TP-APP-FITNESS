import { Component, OnInit } from '@angular/core';
import { ExcerciseService } from 'src/app/excercise.service';
import { Excercise } from 'src/app/models/excercise';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  constructor(private excerciseService: ExcerciseService) {
  }
  async ngOnInit(): Promise<void> {
    ///await this.excerciseService.loadExcercises();
    const buscar = document.getElementById("findOut");
    const miInput = document.getElementById('search') as HTMLInputElement;
    buscar?.addEventListener('click', () => this.buscarEjercicio(miInput));
  }
  buscarEjercicio(miInput: HTMLInputElement){
    const exercise = miInput.value;    
    const position = this.excerciseService.searchEX(exercise);
    console.log("POSITION: "+position);
    if(position>=0) {
      
    }
  }
}
