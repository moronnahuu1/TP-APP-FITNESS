import { Component } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UserService } from '../user.service';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  usersList: Usuario[] = [];
  user = new Usuario("","","");
  position = -1;
  element = false;
  logged = false;

  constructor(userService: UserService){
    this.usersList = userService.obtenerUsuarios();
  }

  async ngOnInit(): Promise<void> {
    const userSerializado = localStorage.getItem("oneUser");
    // this.user = new Usuario("","","");
    if(userSerializado){
      this.user = JSON.parse(userSerializado);
    }    
      this.position = this.verificarUsuarioExistente(this.user);
      console.log(this.user);
      
      if(this.position>=0){ ///ENCONTRO EL USUARIO 
        const userKey = `user_${this.user.email}`;
        const storedHeight = localStorage.getItem(`${userKey}_userHeight`);
        const storedWeight = localStorage.getItem(`${userKey}_userWeight`);
        console.log('Altura'+storedHeight, 'Peso:'+storedWeight);
        this.logged = true;

        //formulario de carga de datos corporales
      }else { ///NO HAY UN USUARIO LOGUEADO
        this.element = true;
        
        // let respuesta = window.confirm('You must be loged to try the BMI calculator \n Quieres loguearte?');
        // if(respuesta ===true){
        //   window.location.href = 'login';
        // } else {
        //   alert('Volviendo a la página de inicio..');
        //   window.location.href = '';
        // }
      }
    }

    verificarUsuarioExistente(user: Usuario): number{
      let i=0;
      let position = -1;
        while(i<this.usersList.length && user.email != this.usersList[i].email){
          i++;
        }
        if(i<this.usersList.length) {        
          position = i;
        }      
        return position;
    }

    changeWindow(name: string) {
      window.location.href = `${name}`;
    }
   
    Calculate(): void {
      const heightInput: HTMLInputElement | null = document.getElementById("h-input") as HTMLInputElement;
      const weightInput: HTMLInputElement | null = document.getElementById("w-input") as HTMLInputElement;
      const bmiOutput: HTMLElement | null = document.getElementById("bmi-output");
      const bmiStatus: HTMLElement | null = document.getElementById("bmi-status");
      

      if (!heightInput || !weightInput || !bmiOutput || !bmiStatus) {
          console.error("One or more elements not found.");
          return;
      }

      console.log(this.user);
      const height: number = parseFloat(heightInput.value);
      const weight: number = parseFloat(weightInput.value);
      
      const userKey = `user_${this.user.email}`;

      localStorage.setItem(`${userKey}_userHeight`, String(height));
      localStorage.setItem(`${userKey}_userWeight`, String(weight));

      this.user.height = height;
      this.user.weight = weight;
      
      // localStorage.setItem("oneUser", JSON.stringify(this.usersList[this.position]));
      const result: number = weight / ((height / 100) ** 2);
  
      if (!isNaN(result)) {
          bmiOutput.innerHTML = result.toString();
          if (result < 18.5) {
              bmiStatus.innerHTML = "Underweight";
          } else if (result < 25) {
              bmiStatus.innerHTML = "Healthy";
          } else if (result < 30) {
              bmiStatus.innerHTML = "Overweight";
          } else {
              bmiStatus.innerHTML = "Obesity";
          }
      }
  }
  
}
