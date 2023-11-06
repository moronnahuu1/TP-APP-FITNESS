import { Component, OnInit } from '@angular/core';
import { Excercise } from '../models/excercise';
import { ExcerciseService } from '../excercise.service'; // Ruta relativa para navegar hacia atrás y luego al servicio
@Component({
  selector: 'app-excercises',
  templateUrl: './excercises.component.html',
  styleUrls: ['./excercises.component.css']
})
export class ExcercisesComponent implements OnInit {
  excerciseList: Array<Excercise>=[];
  constructor(private excerciseService: ExcerciseService) {
    this.excerciseList = excerciseService.getExcercises();
  }
  async ngOnInit(): Promise<void> {
    const url = 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9199c93dfdmshb81cf20b6d2cf40p104aeajsn2274f1c47343',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options);
      const result: string = await response.text();
      console.log(result);
      this.uploadExcercises(result);
    } catch (error) {
      console.error(error);
    }
  }
  uploadExcercises(result: string): void {
    try {
      let data = JSON.parse(result);
    for(let i=0; i<result.length; i++) {
      if(data[i]!=null){
      const difficulty: string = data[i].difficulty;
      const equipment: string = data[i].equipment;
      const instructions: string = data[i].instructions;
      const muscle: string = data[i].muscle;
      const name: string = data[i].name;
      const type: string = data[i].type;
      const excercise = new Excercise(difficulty, equipment, instructions, muscle, name, type);
      this.excerciseService.addExcercise(excercise);
      this.excerciseList = this.excerciseService.getExcercises();
      }
    }
    console.log(this.excerciseList);
    } catch (error) {
      console.log(error);
    }
  }
}