import { Injectable } from '@angular/core';
import { Usuario } from './models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Usuario[] = []; 
  user: Usuario | undefined;
  constructor() {
  }

  persistirDatos() {
    localStorage.clear();
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  obtenerUsuarios() {
    let usersData = localStorage.getItem("users");
    if(usersData){
      this.users = JSON.parse(usersData);
    }    
    return this.users; // Devuelve la lista de usuarios almacenados
  }

  getUser(){
    const userSerializado = localStorage.getItem("oneUser");
    if(userSerializado){
      this.user = JSON.parse(userSerializado);
    }
    return this.user;
  }

  getUserSeason(parametro: string){
    if(this.user){
      let position = this.verificarUsuarioExistente(this.user);
    if(position>=0){
      if(this.user.newSeason && parametro == "season"){
        return this.user.newSeason;
      }else{
        return this.user.newSeason?.months;
      }
    }else{
      return -1;
    }
    }else{
      return -1;
    }
  }

  verificarUsuarioExistente(user: Usuario): number{
    let i=0;
    let position = -1;
      while(i<this.users.length && user.email != this.users[i].email){
        i++;
      }
      if(i<this.users.length) {        
        position = i;
      }      
      return position;
  }

  agregarUsuario(nuevoUsuario: Usuario) {
    this.users.push(nuevoUsuario); // Agrega un nuevo usuario a la lista
  }

}

