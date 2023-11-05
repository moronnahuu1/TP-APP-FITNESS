import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
    
  }

  
 //Se reciben los siguientes datos: 
 @Input()
  userList : Array<Usuario> = [];
  email: string = "";
  userName: string = "";
  password: string = "";

  //Cuando se sube el formulario, se crea el nuevo Usuario y lo agrega a la lista de usuarios:
  onSubmit(event: Event){
   let nuevoUsuario: Usuario = new Usuario (this.email, this.userName, this.password);
   this.userList.push(nuevoUsuario);
   console.log(this.userList);
  }

 

}


