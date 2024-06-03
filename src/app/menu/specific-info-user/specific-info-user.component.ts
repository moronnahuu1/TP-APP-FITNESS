import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-specific-info-user',
  templateUrl: './specific-info-user.component.html',
  styleUrls: ['./specific-info-user.component.css']
})
export class SpecificInfoUserComponent implements OnInit {
  userSerializado = localStorage.getItem("oneUser");
  user: Usuario = new Usuario("","","");
  ngOnInit(): void {
    if(this.userSerializado){
      this.user = JSON.parse(this.userSerializado); 
      this.user.image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png';
      let miH1 = document.getElementById("userName");
      if(miH1){
        miH1.innerHTML += this.user.userName;
      }
      let miP = document.getElementById("email");
      if(miP){
        miP.innerHTML += this.user.email;
      }
      miP = document.getElementById("password");
      if(miP){
        miP.innerHTML = this.user.password;
      }
      miP = document.getElementById("firstName");
      if(miP){
        if(this.user.firstName != undefined){
          miP.innerHTML += this.user.firstName;
        }
      }
      miP = document.getElementById("lastName");
      if(miP){
        if(this.user.lastName != undefined){
          miP.innerHTML += this.user.lastName;
        }
      }
      miP = document.getElementById("age");
      if(miP){
        if(this.user.age != undefined){
          miP.innerHTML += this.user.age;
        }
      }
      miP = document.getElementById("weight");
      if(miP){
        if(this.user.weight != undefined){
          miP.innerHTML += this.user.weight;
        }
      }
      miP = document.getElementById("height");
      if(miP){
        if(this.user.height != undefined){
          miP.innerHTML += this.user.height;
        }
      }
      miP = document.getElementById("routinesAmount");
      if(miP){
        if(this.user.userRoutines.length > 0){
          miP.innerHTML += this.user.userRoutines.length;
        }
    }
  }
}
  changeWindow(name: string){
    window.location.href = name;
  }
}
