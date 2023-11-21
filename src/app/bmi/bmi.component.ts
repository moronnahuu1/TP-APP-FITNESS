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
  user: Usuario = new Usuario('','','');
  position = -1;

  constructor(userService: UserService){
    this.usersList = userService.obtenerUsuarios();
  }
  async ngOnInit(): Promise<void> {
    const userSerializado = localStorage.getItem("oneUser");
    this.user = new Usuario("","","");
    if(userSerializado){
      this.user = JSON.parse(userSerializado);
    }    
      this.position = this.verificarUsuarioExistente(this.user);
      console.log(this.user);
      
      if(this.position>=0){ ///ENCONTRO EL USUARIO 
        //formulario de carga de datos corporales
      }else { ///NO HAY UN USUARIO LOGUEADO
        document.body.style.backgroundColor = 'rgba(76, 175, 80, 0.3)';
        alert("You must be loged to try the BMI calculator");
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
}
