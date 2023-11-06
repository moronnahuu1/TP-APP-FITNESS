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
  @Input()
  email: string = "";
  userName: string = "";
  password: string = "";
  register: boolean = true;
  //Cuando se sube el formulario, se crea el nuevo Usuario y lo agrega a la lista de usuarios:
  onSubmit(event: Event){
    event.preventDefault();
    this.verifyUserRegistration();
    if(this.register == true) {
      let nuevoUsuario: Usuario = new Usuario (this.email, this.userName, this.password);
      this.userList.push(nuevoUsuario);
    } else {

    }
   window.location.reload();
  }
  verifyUserRegistration() {
    let i = 0
    while(i<this.userList.length && this.register == true) {
      if(this.email == this.userList[i].email) {
        this.register = false;
      }else {
        i++;
      }
    }
  }
  @Input()
  access: boolean = false;
  emailAux: string = "";
  passAux: string = "";
  loginButton(event: Event) {
    event.preventDefault();
    console.log(this.userList);
    this.verifyUserLogin();
    if(this.access) {
      ///Arranca el programa
      console.log("INICIO EXITOSO");
      
    }else {
      console.log("ERROR AL INICIAR SESION");
    }
  }
  verifyUserLogin() {
    let i = 0
    while(i<this.userList.length && this.access == false) {
      if(this.emailAux == this.userList[i].email) {
        if(this.passAux == this.userList[i].password) {
          this.access = true;
        }
      }else {
        i++;
      }
    }
  }
}
