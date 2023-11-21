import { Injectable } from '@angular/core';
import { Usuario } from './models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: Usuario[] = []; // Aquí almacenarás tus datos de usuarios

  constructor() {
    // Puedes cargar datos iniciales aquí o en un método separado.
    this.cargarDatosIniciales();
  }

  cargarDatosIniciales() {
    // Simula la carga de datos iniciales, puedes cargarlos desde un archivo JSON, una API, etc.
    this.users = [
      new Usuario('john.doe@example.com', 'johndoe', 'password1','John', 'Doe', 30, 70, 175),
      new Usuario('jane.smith@example.com', 'janesmith', 'password2','Jane', 'Smith', 28, 65, 165),
      // Agrega más usuarios si es necesario
    ];
  }

  obtenerUsuarios() {
    return this.users; // Devuelve la lista de usuarios almacenados
  }

  agregarUsuario(nuevoUsuario: Usuario) {
    this.users.push(nuevoUsuario); // Agrega un nuevo usuario a la lista
  }

  // Agrega otros métodos para actualizar, eliminar o interactuar con los datos de usuarios según tus necesidades.
}

