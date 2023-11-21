import { Injectable } from '@angular/core';
import { Usuario } from './models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: Usuario[] = []; 

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

  agregarUsuario(nuevoUsuario: Usuario) {
    this.users.push(nuevoUsuario); // Agrega un nuevo usuario a la lista
  }

}

