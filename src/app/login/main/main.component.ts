import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  ngOnInit(): void {
    
  }
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
