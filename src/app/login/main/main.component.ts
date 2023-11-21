import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UserService } from '../../user.service'; // Ruta relativa para navegar hacia atrás y luego al servicio
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  userList: Array<Usuario> = [];
  ngOnInit(): void {
    
  }
  //storedData = localStorage.getItem('key'); // Obtiene los datos del almacenamiento local
  //private userService: UserService =  this.storedData ? JSON.parse(this.storedData) : null;
  constructor(private userService: UserService) {
    this.userList = userService.obtenerUsuarios();
  }
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
      this.userService.agregarUsuario(nuevoUsuario);
      this.userService.persistirDatos();
      this.userList = this.userService.obtenerUsuarios();
      ///localStorage.setItem('key', JSON.stringify(this.userService));
      console.log(this.userList);
      
    } else {

    }
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
  emailAux: string = "";
  passAux: string = "";
  access: boolean = false;
  loginButton(event: Event) {
    event.preventDefault();
    console.log(this.emailAux);
    console.log(this.passAux);
    console.log(this.userList);
    let position = this.verifyUserLogin(this.emailAux, this.passAux);
    if(this.access) {
      ///Arranca el programa
      localStorage.setItem("oneUser", JSON.stringify(this.userList[position]));
      /*const usuarioSerializado = JSON.stringify(this.userList[position]);
      const nuevaURL = `?parametro=${encodeURIComponent(usuarioSerializado)}`;*/
      window.location.href = '';
    }else {
    }
  }
  verifyUserLogin(emailAux1: string, passAux1: string): number {
    let i = 0
    while(i<this.userList.length && this.access == false) {
      if(emailAux1 == this.userList[i].email) {
        if(passAux1 == this.userList[i].password) {
          this.access = true;
          console.log("ACCESO CONCEDIDO");
        }else {
        }
      }
      i++;
    }
    if(!this.access){
      console.log("EMAIL O CONTRASEÑA INCORRECTOS");
    }
    return i-1;
  }
}
