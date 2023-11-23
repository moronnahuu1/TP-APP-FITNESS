import { Component, Input } from '@angular/core';
import { Excercise } from '../models/excercise';
import { Block } from '@angular/compiler';
import { routine } from '../models/routine';
import { UserService } from '../user.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.css']
})
export class RoutinesComponent {
  urlParams = new URLSearchParams(window.location.search);
  ejercicioSerializado = this.urlParams.get('parametro');
  exerciseAdded = this.urlParams.get('access');
  routinesList: routine[] = [];
  publicRoutinesList: routine[] = [];
  usersList: Usuario[] = [];
  position = -1;
  user: Usuario = new Usuario("","","");
  constructor(userService: UserService){
    this.usersList = userService.obtenerUsuarios();
  }
  async ngOnInit(): Promise<void> {
    const userSerializado = localStorage.getItem("oneUser");
    this.user = new Usuario("","","");
    if(userSerializado){
      this.user = JSON.parse(userSerializado);
    } 
      this.position = this.verificarUsuarioExistente(this.user);
      console.log(this.user);
      
      if(this.position>=0){ ///ENCONTRO EL USUARIO 
        if(this.ejercicioSerializado){
          this.displayBlock("selectRoutine");
        }
        this.routinesList = this.user.userRoutines;
        this.displayBlock("logged");
        this.displayNone("notLogged");
        this.displayNone("notLoggedMessage");
        this.displayBlock('optionCreate');
        this.displayBlock('optionLook');
        if(this.routinesList.length>0){
          this.displayBlock('routinesFounded');
          let info = document.getElementById("routineName");
          for(let i=0; i<this.routinesList.length; i++) {
            if(info){
              info.innerHTML += "\n" + this.routinesList[i].name;
            }
          }
        }else {
          this.displayBlock('noRoutines')
        }
      }else { ///NO HAY UN USUARIO LOGUEADO
        console.log("Para acceder a las rutinas debes estar logueado");
      }
      for(let i = 0; i<this.usersList.length; i++){
        console.log("PRIMER FOR");
        for(let m = 0; m<this.usersList[i].userRoutines.length; m++){
          console.log("SEGUNDO FOR");
          if(this.usersList[i].userRoutines[m].publicRoutine == true) {
            this.usersList[i].userRoutines[m].userName = this.usersList[i].userName;
            this.publicRoutinesList.push(this.usersList[i].userRoutines[m]);
          }
        }
      }
      localStorage.setItem("publicRoutines", JSON.stringify(this.publicRoutinesList));
    }
  displayBlock(name: string){
    let miDiv = document.getElementById(name);
        if(miDiv){
        miDiv.style.display = 'block';
        }
  }
  displayNone(name: string){
    let miDiv = document.getElementById(name);
        if(miDiv){
        miDiv.style.display = 'none';
        }
  }
  displayCreate(){
    this.displayNone("notLoggedMessage");
    this.displayNone('routinesFounded');
    this.displayNone('noRoutines');
    this.displayBlock('create');
  }
  crearRutina(){
    var inputValor = <HTMLInputElement>document.getElementById("nameRoutine");
    let input = inputValor.value;
    var privateOptionAccess = <HTMLInputElement>document.getElementById("privateAccessInp");
    var publicOptionAccess = <HTMLInputElement>document.getElementById("publicAccessInp");
    let optionAccessValue = false;
    if(privateOptionAccess.checked){
      console.log("PRIVADO");
      
      optionAccessValue = false;
    }else {
      if(publicOptionAccess.checked){
        console.log("PUBLICO");
        
        optionAccessValue = true;
      }
    }
    let rutina: routine = new routine(input, this.routinesList.length, optionAccessValue);
    let access = this.verificarRutina(rutina);
    if(access){
      this.routinesList.push(rutina);
    this.user.userRoutines = this.routinesList;
    localStorage.setItem("oneUser", JSON.stringify(this.user));
    this.usersList[this.position] = this.user;
    localStorage.setItem("users", JSON.stringify(this.usersList));
    this.displayNone("repeatedRoutine");
    location.reload();
    }else{
      this.displayBlock("repeatedRoutine");
    }
  }
  verificarRutina(rutina: routine): boolean{
    let i = 0;
    let access = true;
    while(i<this.routinesList.length && access == true){
      if(this.routinesList[i].name == rutina.name){
        access = false;
      }else{
        i++;
      }
    }
    return access;
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
  changeWindow(rutina: routine) {
    const rutinaSerializada = JSON.stringify(rutina);
    const nuevaURL = `specificRoutine?parametro=${encodeURIComponent(rutinaSerializada)}`;
    window.location.href = nuevaURL;
}
verificarEjercicioExistente(exercise: Excercise, rutina: routine): boolean{
  let access = true;
  if(rutina.excerciseList.length>0){
    let i = 0;
    while(i<rutina.excerciseList.length && access){
      if(rutina.excerciseList[i].id == exercise.id){
        access = false;
      }
      i++;
    }
  }
  return access;
}
addEx(rutina: routine){
  this.displayNone("selectRoutine");
  if (this.ejercicioSerializado) { 
    const exercise: Excercise = JSON.parse(decodeURIComponent(this.ejercicioSerializado));
    let acceso = this.verificarEjercicioExistente(exercise, rutina);
    if(acceso){
    rutina.excerciseList.push(exercise);
    this.routinesList[rutina.id] = rutina;
    this.user.userRoutines = this.routinesList;
    localStorage.setItem("oneUser", JSON.stringify(this.user));
    this.usersList[this.position] = this.user;
    localStorage.setItem("users", JSON.stringify(this.usersList));
    this.changeWindow(rutina);
    }else{
      this.displayNone("selected");
      this.displayBlock("repeated");
    }
  }else{
    this.changeWindow(rutina);
  }
}
 desmarcarOpcion(otraOpcion: any) {
  let opcion = document.getElementById(otraOpcion) as HTMLInputElement;
  if(opcion){
    opcion.checked = false;
  }
}
showRoutines(){
  window.location.href = 'publicRoutinesShow';
}
}
