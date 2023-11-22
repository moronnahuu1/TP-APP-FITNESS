import { Component, OnInit } from '@angular/core';
import { Excercise } from 'src/app/models/excercise';

@Component({
  selector: 'app-specific-information',
  templateUrl: './specific-information.component.html',
  styleUrls: ['./specific-information.component.css']
})
export class SpecificInformationComponent implements OnInit{
  urlParams = new URLSearchParams(window.location.search);
  rutinaSerializada = this.urlParams.get('parametro');
  excerciseList: Excercise[] = [];
  ngOnInit(): void {
    if(this.rutinaSerializada){
      let routine = JSON.parse(this.rutinaSerializada);
      let routineName = document.getElementById("name");
      if(routineName){
        routineName.innerHTML = routine.name;
      }
    if(routine.excerciseList.length > 0) {
      this.excerciseList = routine.excerciseList;
    }else {
      let miDiv = document.getElementById("noExercises");
      if(miDiv){
        miDiv.style.display = 'block';
      }
    }
    }
  }
  backToList(){
    window.location.href = 'routines';
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 381db34d054f0f096e0eaa25d7d32a9d4f06d8da
