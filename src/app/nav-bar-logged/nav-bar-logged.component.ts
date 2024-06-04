import { Component, OnInit, inject } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav-bar-logged',
  templateUrl: './nav-bar-logged.component.html',
  styleUrls: ['./nav-bar-logged.component.css']
})
export class NavBarLoggedComponent implements OnInit{
  usersList: Usuario[] = [];
  user: Usuario | undefined;
  position: number = -1;
  userService = inject(UserService);
  
  ngOnInit(): void {
    this.usersList = this.userService.obtenerUsuarios();
    this.user = this.userService.getUser();
  }
  changeWindow(name: string) {
    window.location.href = `${name}`;
  }
  logOut() {
    localStorage.removeItem("oneUser");
    window.location.href = 'login';
  }
}
