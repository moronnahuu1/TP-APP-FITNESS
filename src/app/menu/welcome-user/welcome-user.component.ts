import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-welcome-user',
  templateUrl: './welcome-user.component.html',
  styleUrls: ['./welcome-user.component.css']
})
export class WelcomeUserComponent implements OnInit{
  userData: Usuario = new Usuario("", "", "");

  ngOnInit(): void {
    const userSerializado = localStorage.getItem("oneUser");
    if(userSerializado){
      this.userData = JSON.parse(userSerializado);
      this.showUserData(this.userData);
    }
  }

  showUserData(user: Usuario){
    let name = document.getElementById("userName");
    if(name) {
      name.innerHTML += user.userName.toLowerCase();
    }
    let routinesList = document.getElementById("routinesAmount");
    if(routinesList) {
      routinesList.innerHTML = 'You have '+user.userRoutines.length + " routines created!";
    }
  }
}
