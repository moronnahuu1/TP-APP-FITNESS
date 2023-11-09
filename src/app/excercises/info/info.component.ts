import { Component, OnInit } from '@angular/core';
import { ExcerciseService } from 'src/app/excercise.service';
import { Excercise } from 'src/app/models/excercise';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  ///SOLO PARA PROBAR, DESPUES HAY QUE SACARLO CUANDO HAGAMOS LA PERSISTENCIA DE DATOS
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
      this.showExcercises();
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
  showExcercises(){
    let container = document.getElementById("container");
    let resultado = "";
    for(let i=0; i<this.excerciseList.length; i++){
      let midiv = document.createElement('div');
      let miH1 = document.createElement('h1');
      let pType = document.createElement('p');
      let pDifficulty = document.createElement('p');
      miH1.textContent = this.excerciseList[i].getName();
      pType.textContent = this.excerciseList[i].getType();
      pDifficulty.textContent = this.excerciseList[i].getDifficulty();
      midiv.appendChild(miH1);
      midiv.appendChild(pType);
      midiv.appendChild(pDifficulty);
      resultado += midiv.outerHTML;      
  
    }
    if (container != null) {
      container.innerHTML = resultado;
      // Ahora, después de agregar los midiv al contenedor, puedes agregar el event listener
      for (let i = 0; i < this.excerciseList.length; i++) {
        let midiv = container.children[i];
        if (midiv) {
          midiv.addEventListener('click', function () {
            window.location.href = 'login';
          });
        }
      }
    }
  }
}
