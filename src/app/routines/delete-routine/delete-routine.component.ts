import { Component, OnInit } from '@angular/core';
import { Display } from 'src/app/display/display';
import { routine } from 'src/app/models/routine';
import { Usuario } from 'src/app/models/usuario';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-delete-routine',
  templateUrl: './delete-routine.component.html',
  styleUrls: ['./delete-routine.component.css']
})
export class DeleteRoutineComponent implements OnInit {
  routinesList: routine[] = [];
  usersList: Usuario[] = [];
  position = -1;
  user: Usuario = new Usuario("","","");
  constructor(userService: UserService){
    this.usersList = userService.obtenerUsuarios();
  }
ngOnInit(): void {
  this.getUser();
  if(this.position>=0){ ///ENCONTRO EL USUARIO 
    this.routinesList = this.user.userRoutines;
    Display.displayBlock("delete");
  }
  this.verifyDelete();
}
getUser(){
  const userSerializado = localStorage.getItem("oneUser");
  if(userSerializado){
  this.user = JSON.parse(userSerializado);
  }
  this.position = this.verificarUsuarioExistente(this.user);
}
verifyDelete(){
      let created = localStorage.getItem("deleted");
        let repeated = localStorage.getItem("notFounded");
        if(created){
          let createdBoolean =  JSON.parse(created);          
          if(createdBoolean){
            alert("Routine successfully deleted");
            window.location.href = 'routines';
          }
        }else{
          if(repeated){            
            let repeatedBoolean = JSON.parse(repeated);
            if(repeatedBoolean){
              alert("The routine you are aiming to delete is not on your list");
            }
          }
        }
        localStorage.removeItem("deleted");
        localStorage.removeItem("notFounded");
}
    deleteRoutine(){
      let input = document.getElementById("nameRoutine") as HTMLInputElement;
      let routineName = '';
      if(input){
        routineName = input.value;
        let index = this.verificarRutina(routineName);
        if(index>=0){
          this.routinesList.splice(index, 1);
          this.user.userRoutines = this.routinesList;
          localStorage.setItem("oneUser", JSON.stringify(this.user));
          this.usersList[this.position] = this.user;
          localStorage.setItem("users", JSON.stringify(this.usersList));
          localStorage.setItem("deleted", JSON.stringify(true));
          localStorage.removeItem("notFounded");
        }else{
          localStorage.setItem("notFounded", JSON.stringify(true));
          localStorage.removeItem("deleted");
        }
        location.reload();
      }
    }
    displayMessage(color: string){
      let miDiv = document.getElementById("messages");
      if(miDiv){
        miDiv.style.display = 'block';
        miDiv.style.backgroundColor = color;
      }
    }
  
  verificarRutina(rutina: string): number{
    let i = 0;
    let access = false;
    while(i<this.routinesList.length && access == false){
      if(this.routinesList[i].name == rutina){
        access = true;
      }else{
        i++;
      }
    }
    if(access){
      return i;
    }else{
      return -1;
    }
  }
  backToList(name: string){
    window.location.href = name;
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
