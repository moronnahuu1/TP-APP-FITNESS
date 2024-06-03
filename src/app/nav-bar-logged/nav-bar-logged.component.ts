import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav-bar-logged',
  templateUrl: './nav-bar-logged.component.html',
  styleUrls: ['./nav-bar-logged.component.css']
})
export class NavBarLoggedComponent implements OnInit{
  usersList: Usuario[] = [];
  user: Usuario = new Usuario("","","");
  position: number = -1;
  constructor(userService: UserService){
    this.usersList = userService.obtenerUsuarios();
  }
  ngOnInit(): void {
      this.getUser();
  }
  changeWindow(name: string) {
    window.location.href = `${name}`;
  }
  logOut() {
    localStorage.removeItem("oneUser");
    window.location.href = 'login';
  }
  getUser(){
    const userSerializado = localStorage.getItem("oneUser");
    if(userSerializado){
      this.user = JSON.parse(userSerializado);
    } 
    this.position = this.verificarUsuarioExistente(this.user);
    if(this.position>=0){
      
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
