import { Component } from '@angular/core';
import { routine } from 'src/app/models/routine';
import { Usuario } from 'src/app/models/usuario';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-routine-show',
  templateUrl: './routine-show.component.html',
  styleUrls: ['./routine-show.component.css']
})
export class RoutineShowComponent {
  routinesList: routine[] = [];
  user: Usuario = new Usuario("", "", "");
  mostrarDiv: boolean = false;
  constructor(private userService: UserService) {
  }

  async ngOnInit(): Promise<void> {
    const userSerializado = localStorage.getItem("oneUser");
    this.user= new Usuario("","","");
    if(userSerializado){
      this.user = JSON.parse(userSerializado);

      this.routinesList = this.user.userRoutines;
      this.mostrarDiv = true;
    }else {
    }
  }
}
