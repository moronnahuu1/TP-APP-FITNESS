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
  element = false;
  logged = false;

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
   
}
