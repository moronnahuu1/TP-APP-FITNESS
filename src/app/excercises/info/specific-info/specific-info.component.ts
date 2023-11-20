import { Component, OnInit } from '@angular/core';
import { ExcerciseService } from 'src/app/excercise.service';
import { Excercise } from 'src/app/models/excercise';

@Component({
  selector: 'app-specific-info',
  templateUrl: './specific-info.component.html',
  styleUrls: ['./specific-info.component.css']
})
export class SpecificInfoComponent implements OnInit {
  excerciseList: Array<Excercise>=[];
  urlParams = new URLSearchParams(window.location.search);
  parametro = this.urlParams.get('parametro');
  parameterNum = Number(this.parametro);
  constructor(private excerciseService: ExcerciseService) {
  }
  async ngOnInit(): Promise<void> {
    await this.excerciseService.loadExercises();
    this.excerciseList = this.excerciseService.getExcercises();    
    const exercise: Excercise = this.excerciseService.getOneExercise(this.parameterNum);
    let titulo = document.getElementById("title");
    let type = document.getElementById("type")
    let difficulty = document.getElementById("difficulty");
    let muscle = document.getElementById("muscle");
    let equipment = document.getElementById("equipment");
    let instruction = document.getElementById("instruction");

    if(titulo!=null){
      titulo.innerHTML = exercise.getName();
    }
    if(type!=null){
      type.innerHTML = "TYPE: " + exercise.getType();
    }
    if(difficulty!=null){
      difficulty.innerHTML = "DIFFICULTY: " + exercise.getDifficulty();
    }
    if(muscle!=null){
      muscle.innerHTML = "MUSCLE: " + exercise.getMuscle();
    }
    if(equipment!=null){
      equipment.innerHTML = "EQUIPMENT: " + exercise.getEquipment();
    }
    if(instruction!=null){
      instruction.innerHTML = "INSTRUCTIONS: " + exercise.getInstructions();
    }
  }
}
