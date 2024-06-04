import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../user.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-not-logged',
  templateUrl: './not-logged.component.html',
  styleUrls: ['./not-logged.component.css']
})
export class NotLoggedComponent implements OnInit{
  userService = inject(UserService);
  user: Usuario | undefined;
  usersList: Array<Usuario> = [];
  ngOnInit(): void {
    this.usersList = this.userService.obtenerUsuarios();
    this.user = this.userService.getUser();
  }
}
