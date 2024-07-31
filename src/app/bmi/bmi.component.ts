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
  storedHeight: string | null = '';
  storedWeight: string | null = '';
  result: string | null  =  '';
  bmiStatus: string | null  =  '';

  constructor(userService: UserService){
    this.usersList = userService.obtenerUsuarios();
  }

  ngOnInit(): void{
    const userSerializado = localStorage.getItem("oneUser");
    // this.user = new Usuario("","","");
    if(userSerializado){
      this.user = JSON.parse(userSerializado);
    }    
      this.position = this.verificarUsuarioExistente(this.user);
      console.log(this.user);
      
      if(this.position>=0){ ///ENCONTRO EL USUARIO 
        this.logged = true;

        const userKey = `user_${this.user.email}`;
         this.storedHeight = localStorage.getItem(`${userKey}_userHeight`);
         this.storedWeight = localStorage.getItem(`${userKey}_userWeight`);
         this.result = localStorage.getItem(`${userKey}_userBmi`);
         this.bmiStatus = localStorage.getItem(`${userKey}_userBmiStatus`);
         
         console.log('Altura:'+ this.storedHeight+'Peso: '+this.storedWeight);

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

      const height: number = parseFloat(heightInput.value);
      const weight: number = parseFloat(weightInput.value);

      if(!Number.isNaN(height)){
        if(height > 0){
          if(!Number.isNaN(weight)){
            if(weight > 0){
              const userKey = `user_${this.user.email}`;
  
          localStorage.setItem(`${userKey}_userHeight`, String(height));
          localStorage.setItem(`${userKey}_userWeight`, String(weight));
    
          this.user.height = height;
          this.user.weight = weight;
          
          // localStorage.setItem("oneUser", JSON.stringify(this.usersList[this.position]));
          let number  = weight / ((height / 100) ** 2);
          this.result = number.toFixed(2);
          console.log('Result: '+this.result);
          if (!isNaN(number)) {
              bmiOutput.innerHTML = this.result.toString();
              if (number < 18.5) {
                this.bmiStatus ="Underweight";
                  bmiStatus.innerHTML = "Underweight";
              } else if (number< 25) {
                this.bmiStatus ="Healthy";
                bmiStatus.innerHTML = "Healthy";
              } else if (number < 30) {
                this.bmiStatus ="Overweight";
                  bmiStatus.innerHTML = "Overweight";
              } else {
                this.bmiStatus ="Obesity";
                  bmiStatus.innerHTML = "Obesity" ;
              }
          }
          
          localStorage.setItem(`${userKey}_userBmi`, String(this.result));
          localStorage.setItem(`${userKey}_userBmiStatus`, String(this.bmiStatus));
            }else{
              alert('Please, enter a valid weight. Your weight cannot be 0 or less');
            }
          }else{
            alert('Please, enter a valid weight. Your weight cannot be empty or contain text characters');
          }
        }else{
          alert('Please, enter a valid height. Your height cannot be 0 or less');
        }
      }else{
        alert('Please, enter a valid height. Your height cannot be empty or contain text characters');
      }
    }


}
