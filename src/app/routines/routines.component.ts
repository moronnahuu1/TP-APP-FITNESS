import { Component, Input } from '@angular/core';
import { Excercise } from '../models/excercise';
import { routine } from '../models/routine';
import { UserService } from '../user.service';
import { Usuario } from '../models/usuario';
import { Display } from '../display/display';
import { routineScheduled } from '../models/routineScheduled';
import { day } from '../models/day';
import { month } from '../models/month';
import { season } from '../models/season';

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
  addToCalendar: boolean = false;
  user: Usuario | undefined;
  months: Array<month> = [];
  newSeason: season = new season(0, [], 0);
  constructor(userService: UserService){
    this.usersList = userService.obtenerUsuarios();
  }
  async ngOnInit(): Promise<void> {
    this.getUser();
      if(this.position>=0){ ///ENCONTRO EL USUARIO 
        this.displaySettings();
      }else { ///NO HAY UN USUARIO LOGUEADO
      }
      this.getPublicRoutines();
    }
  displaySettings(){
    if(this.ejercicioSerializado){
      Display.displayBlock("selectRoutine");
    }
    if(this.user){
      this.routinesList = this.user.userRoutines;
    }
    Display.displayBlock("logged");
    Display.displayNone("notLogged");
    Display.displayNone("notLoggedMessage");
    if(this.routinesList.length>0){
      if(this.verificarCalendario() == true){
        this.addToCalendar = true;
      }
      Display.displayGrid('container');
      let info = document.getElementById("routineName");
      for(let i=0; i<this.routinesList.length; i++) {
        if(info){
          info.innerHTML += "\n" + this.routinesList[i].name;
        }
      }
    }else {
      Display.displayBlock('noRoutines')
    }
  }
  getUser(){
    const userSerializado = localStorage.getItem("oneUser");
    if(userSerializado){
      this.user = JSON.parse(userSerializado);
    }
    if(this.user){
      this.position = this.verificarUsuarioExistente(this.user);
    if(this.position>=0){
      if(this.user.newSeason){
        this.newSeason = this.user.newSeason;
        this.months = this.newSeason.months;
      }
    }
    }
  }
  getPublicRoutines(){
    for(let i = 0; i<this.usersList.length; i++){
      for(let m = 0; m<this.usersList[i].userRoutines.length; m++){
        if(this.usersList[i].userRoutines[m].publicRoutine == true) {
          this.usersList[i].userRoutines[m].userName = this.usersList[i].userName;
          this.publicRoutinesList.push(this.usersList[i].userRoutines[m]);
        }
      }
    }
    localStorage.setItem("publicRoutines", JSON.stringify(this.publicRoutinesList));
  }
  displayCreate(name: string){
    window.location.href = name;
  }
  chooseRoutine(routineAux: routine){
    let firstDayStoraged = localStorage.getItem("firstDayCalendar");
    let lastDayStoraged = localStorage.getItem("lastDayCalendar");
    let firstMonthStoraged = localStorage.getItem("firstMonthCalendar");
    if(firstDayStoraged && lastDayStoraged && firstMonthStoraged){
      let firstDay: day = JSON.parse(firstDayStoraged);
      let lastDay: day = JSON.parse(lastDayStoraged);
      let firstMonth: month = JSON.parse(firstMonthStoraged);
      let routinesScheduled: Array<routineScheduled> = [];
      let color = this.blockDaysOccuped(firstMonth, firstDay, lastDay);
      routineAux.isScheduled = true;
      routineAux.firstDays.push(firstDay);
      routineAux.lastDays.push(lastDay);
      console.log("POST FD LD");

      if(this.user){
        this.routinesList[routineAux.id] = routineAux;
      this.user.userRoutines = this.routinesList;
      let newRoutineScheduled = new routineScheduled(routineAux, firstDay, lastDay, firstMonth, color);
      routinesScheduled.push(newRoutineScheduled);
      this.user.routinesXcalendar.push(newRoutineScheduled);
      localStorage.setItem("oneUser", JSON.stringify(this.user));
      this.usersList[this.position] = this.user;
      localStorage.setItem("users", JSON.stringify(this.usersList));
      localStorage.setItem("calendarAdded", JSON.stringify(true));
      }
    }
    window.location.href = "calendar";
  }
  blockDaysOccuped(monthAux: month, firstDay: day, lastDay: day): string{
    let randomColor = this.generateRandomColor();
    for(let i=0; i<monthAux.days.length; i++){
      let currDate: day = monthAux.days[i];
      if((currDate.number >= firstDay.number) && (currDate.number <= lastDay.number)){
        currDate.occuped = true;
        currDate.color = randomColor;
        ///console.log("TRUE "+ currDate.number);
      }
      monthAux.days[i].color = currDate.color;
      monthAux.days[i].occuped = currDate.occuped;
    }
    this.months[monthAux.monthNumber-1] = monthAux;
    this.newSeason.months = this.months;
    if(this.user){
      this.user.newSeason = this.newSeason;
      localStorage.setItem("oneUser", JSON.stringify(this.user));
      this.usersList[this.position] = this.user;
      localStorage.setItem("users", JSON.stringify(this.usersList));
    }
    return randomColor;
  }
  generateRandomColor(): string {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  }
  verificarCalendario(): boolean{
    let aux = localStorage.getItem("calendarDate");
    let exists: boolean = false;
    if(aux){
      exists = JSON.parse(aux);
      localStorage.removeItem("calendarDate");
    }
    return exists;
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
  Display.displayNone("selectRoutine");
  if (this.ejercicioSerializado) { 
    const exercise: Excercise = JSON.parse(decodeURIComponent(this.ejercicioSerializado));
    let acceso = this.verificarEjercicioExistente(exercise, rutina);
    if(acceso && this.user){
    rutina.excerciseList.push(exercise);
    this.routinesList[rutina.id] = rutina;
    this.user.userRoutines = this.routinesList;
    localStorage.setItem("oneUser", JSON.stringify(this.user));
    this.usersList[this.position] = this.user;
    localStorage.setItem("users", JSON.stringify(this.usersList));
    this.ejercicioSerializado = null;
    alert("Excercise successfully added to the routine");
    window.location.href = 'routines';
    }else{
    this.ejercicioSerializado = null;
     alert("The excercise you're trying to add is already in the routine");
    }
  }else{
    this.changeWindow(rutina);
  }
}
showRoutines(){
  window.location.href = 'publicRoutinesShow';
}
}
