import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { MainComponent } from '../main/main.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
    
  }
  userList: Array<Usuario> = [];
  access: boolean = false;
  @Input()
  email: string = "";
  userName: string = "";
  password: string = "";
  //Cuando se sube el formulario, se crea el nuevo Usuario y lo agrega a la lista de usuarios:
  onSubmit(event: Event){
    
    event.preventDefault();
   let nuevoUsuario: Usuario = new Usuario (this.email, this.userName, this.password);
   this.userList.push(nuevoUsuario);
   console.log(this.userList);
  }
}
