import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Display } from 'src/app/display/display';
import { ExcerciseService } from 'src/app/excercise.service';
import { ExerciseDataService } from 'src/app/exercise-data-service.service';
import { Excercise } from 'src/app/models/excercise';
import { Usuario } from 'src/app/models/usuario';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{
  excerciseList: Array<Excercise>=[];
  private exerciseSubscription: Subscription = new Subscription;
  usersList: Usuario[] = [];
  constructor(private excerciseService: ExcerciseService,private exerciseDataService: ExerciseDataService, private userService: UserService) {
    this.usersList = userService.obtenerUsuarios();    
  }
  async ngOnInit(): Promise<void> {
    const userSerializado = localStorage.getItem("oneUser");
    let user: Usuario = new Usuario("","","");
    if(userSerializado){
      user = JSON.parse(userSerializado);
      Display.displayBlock("logged");
      Display.displayNone("notLogged");
      
    }
      console.log(user);
      let position = this.verificarUsuarioExistente(user); 
      console.log(position);
    // await this.excerciseService.loadExercises();
    this.excerciseList = this.exerciseDataService.getExercises();  
    
    this.exerciseSubscription = this.exerciseDataService.getExercisesSubject().subscribe(
      (exercises: Excercise[]) => {
        console.log('Data received in InfoComponent:', exercises);
        this.excerciseList = exercises;
      }
    );
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


  changeWindow(ejercicio: Excercise){
    const ejercicioSerializado = JSON.stringify(ejercicio);
    const nuevaURL = `specificInfo?parametro=${encodeURIComponent(ejercicioSerializado)}`;
    window.location.href = nuevaURL;
  }
}
