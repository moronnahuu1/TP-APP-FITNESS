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
export class InfoComponent implements OnInit, OnDestroy{
  excerciseList: Array<Excercise>=[];
  private exerciseSubscription: Subscription = new Subscription;

  
  constructor(private excerciseService: ExcerciseService,private exerciseDataService: ExerciseDataService) {
  }
  
  async ngOnInit(): Promise<void> {
    await this.excerciseService.loadExercises();
    this.excerciseList = this.exerciseDataService.getExercises();  
    
    
    this.exerciseSubscription = this.exerciseDataService.getExercisesSubject().subscribe(
      (exercises: Excercise[]) => {
        this.excerciseList = exercises;
      }
    );
  }

  ngOnDestroy(): void {
    // Asegúrate de desuscribirte para evitar posibles problemas de memoria
    this.exerciseSubscription.unsubscribe();
  }

  changeWindow(parametro: number){
    window.location.href = `specificInfo?parametro=${this.excerciseList}`;
  }
  // showExcercises(){
  //   let container = document.getElementById("container");
  //   let resultado = "";
  //   for(let i=0; i<this.excerciseList.length; i++){
  //     let midiv = document.createElement('div');
  //     let miH1 = document.createElement('h1');
  //     let pType = document.createElement('p');
  //     let pDifficulty = document.createElement('p');

  //     midiv.classList.add('exercise-item');
  //     miH1.classList.add('exercise-name');
  //     pType.classList.add('exercise-type');
  //     pDifficulty.classList.add('exercise-difficulty');

  //     miH1.textContent = this.excerciseList[i].getName();
  //     pType.textContent = this.excerciseList[i].getType();
  //     pDifficulty.textContent = this.excerciseList[i].getDifficulty();
  //     midiv.appendChild(miH1);
  //     midiv.appendChild(pType);
  //     midiv.appendChild(pDifficulty);
  //     resultado += midiv.outerHTML;      
  
  //   }
  //   if (container != null) {
  //     container.innerHTML = resultado;
  //     // Ahora, después de agregar los midiv al contenedor, puedes agregar el event listener
  //     for (let i = 0; i < this.excerciseList.length; i++) {
  //       let midiv = container.children[i];
  //       if (midiv) {
  //         midiv.addEventListener('click', function () {
  //           window.location.href = 'login';
  //         });
  //       }
  //     }
  //   }
  // }
}
