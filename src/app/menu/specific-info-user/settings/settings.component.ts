import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  usersList: Usuario[] = [];
  userSerializado = localStorage.getItem("oneUser");
  user: Usuario = new Usuario("","","");
  constructor(private userService: UserService){
  }
  ngOnInit(): void {
    this.usersList = this.userService.obtenerUsuarios();
    if(this.userSerializado){
      this.user = JSON.parse(this.userSerializado); 
    }
  }
  setInfo(parameter: string){
    switch(parameter) {
      case 'firstName': 
      let miInput = document.getElementById("firstNameInp") as HTMLInputElement;
    if(miInput){
      let firstNameAux = miInput.value;      
      this.user.firstName = firstNameAux;
      this.displayBlock("savedFN");
      this.displayNone("savedLN");
      this.displayNone("savedAge");
      this.displayNone("savedWeight");
      this.displayNone("savedHeight");
      this.rechargeUser();
    }
      break; 
      
      case 'lastName': 
      console.log("AAAALAST");
      
      let lastNameInp = document.getElementById("lastNameInp") as HTMLInputElement;
    if(lastNameInp){
      this.displayBlock("savedLN");
      this.displayNone("savedFN");
      this.displayNone("savedAge");
      this.displayNone("savedWeight");
      this.displayNone("savedHeight");
      let lastNameAux = lastNameInp.value;      
      this.user.lastName = lastNameAux;
      this.rechargeUser();
    }
      break; 

      case 'age': 
      let ageInp = document.getElementById("ageInp") as HTMLInputElement;
    if(ageInp){
      this.displayBlock("savedAge");
      this.displayNone("savedLN");
      this.displayNone("savedFN");
      this.displayNone("savedWeight");
      this.displayNone("savedHeight");
      let ageAux = parseInt(ageInp.value);      
      this.user.age = ageAux;
      this.rechargeUser();
    }
      break; 

      case 'weight': 
      let weightInp = document.getElementById("weightInp") as HTMLInputElement;
    if(weightInp){
      this.displayBlock("savedWeight");
      this.displayNone("savedLN");
      this.displayNone("savedAge");
      this.displayNone("savedFN");
      this.displayNone("savedHeight");
      let weightAux = parseInt(weightInp.value);      
      this.user.weight =  weightAux;
      this.rechargeUser();
    }
      break; 

      case 'height': 
      let heightInp = document.getElementById("heightInp") as HTMLInputElement;
    if(heightInp){
      this.displayBlock("savedHeight");
      this.displayNone("savedLN");
      this.displayNone("savedAge");
      this.displayNone("savedWeight");
      this.displayNone("savedFN");
      let heightAux = parseInt(heightInp.value);      
      this.user.height = heightAux;
      this.rechargeUser();
    }
      break; 
    }
  }
  rechargeUser(){
    if(this.user.id != undefined){
      localStorage.setItem("oneUser", JSON.stringify(this.user));
      this.usersList[this.user.id] = this.user;
      this.userService.users = this.usersList;
      this.userService.persistirDatos();
    }
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
  changeWindow(name: string){
    window.location.href = name;
  }
}
