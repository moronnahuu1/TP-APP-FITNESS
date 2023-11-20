import { Component, OnInit } from '@angular/core';
import { ExcerciseService } from 'src/app/excercise.service';
import { Excercise } from 'src/app/models/excercise';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  excerciseList: Array<Excercise>=[];
  constructor(private excerciseService: ExcerciseService) {
  }
  async ngOnInit(): Promise<void> {
    await this.excerciseService.loadExercises();
    this.excerciseList = this.excerciseService.getExcercises();    
  }
  
  changeWindow(parametro: number){
    window.location.href = `specificInfo?parametro=${parametro}`;
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
