import { Component, OnInit } from '@angular/core';
import { Excercise } from 'src/app/models/excercise';
import Swiper from 'swiper';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-specific-information',
  templateUrl: './specific-information.component.html',
  styleUrls: ['./specific-information.component.css']
})
export class SpecificInformationComponent implements OnInit{
  urlParams = new URLSearchParams(window.location.search);
  rutinaSerializada = this.urlParams.get('parametro');
  excerciseList: Excercise[] = [];
  activeSlideIndex: number = 1;
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
      let swiper = document.getElementById("swiperID");
      if(miDiv && swiper){
        miDiv.style.display = 'flex';
        swiper.style.display = 'none';
      }
    }
    }
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'vertical',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }

  backToList(name: string){
    window.location.href = name;
  }
}
/*
<div class="routine-item">
        <div *ngFor="let exercise of excerciseList" class="exercise-item">
            <h1 class="exercise-name"> {{exercise.name}}</h1>
            <p class="exercise-type">Type: {{exercise.type}}</p>
            <p class="exercise-difficulty">Difficulty: {{exercise.difficulty}}</p>
            <p class="exercise-muscle">Muscle: {{exercise.muscle}}</p>
            <p class="exercise-reps">Repetitions: {{exercise.reps}}</p>
            <p class="exercise-instructions">{{exercise.instructions}}</p>
        </div>
    </div>
*/