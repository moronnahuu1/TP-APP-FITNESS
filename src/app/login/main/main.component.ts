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
  userList: Array<Usuario> = []
  access: boolean = false;
  @Input()
  email: string = "";
  userName: string = "";
  password: string = "";
  //Cuando se sube el formulario, se crea el nuevo Usuario y lo agrega a la lista de usuarios:
  onSubmit(event: Event){
   let nuevoUsuario: Usuario = new Usuario (this.email, this.userName, this.password);
   this.userList.push(nuevoUsuario);
   console.log(this.userList);
  }

  /*@Input()
  emailAux: string = "";
  passAux: string = "";
  loginButton(event: Event) {
    event.preventDefault();
    let i: number = 0;
    while(i<this.userList.length && !this.access) {
      if(this.userList[i].email == this.emailAux && this.userList[i].password == this.passAux) {
        this.access = true;
      }
    }
    if(this.access) {
      ///Arranca el programa
    }else {
      document.getElementById("info").innerHTML = "Email o contraseña incorrectos";
    }
  }*/
}
