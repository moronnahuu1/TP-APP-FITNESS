import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UserService } from 'src/app/user.service';
import { Validators } from 'src/app/validators/validators';

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
      if(Validators.validateInput(firstNameAux)){
        this.user.firstName = firstNameAux;
        this.displayBlock("savedFN");
        this.displayNone("savedLN");
        this.displayNone("savedAge");
        this.displayNone("savedWeight");
        this.displayNone("savedHeight");
        this.rechargeUser();
      }  
    }
      break; 
      
      case 'lastName': 
      
      let lastNameInp = document.getElementById("lastNameInp") as HTMLInputElement;
    if(lastNameInp){
      let lastNameAux = lastNameInp.value;
      if(Validators.validateInput(lastNameAux)){
        this.displayBlock("savedLN");
        this.displayNone("savedFN");
        this.displayNone("savedAge");
        this.displayNone("savedWeight");
        this.displayNone("savedHeight");
        this.user.lastName = lastNameAux;
        this.rechargeUser();
      }
    }
      break; 

      case 'age': 
      let ageInp = document.getElementById("ageInp") as HTMLInputElement;
    if(ageInp){
      let ageAux = parseInt(ageInp.value);      
      if(!Number.isNaN(ageAux)){
        if(ageAux > 0){
          this.displayBlock("savedAge");
          this.displayNone("savedLN");
          this.displayNone("savedFN");
          this.displayNone("savedWeight");
          this.displayNone("savedHeight");
          this.user.age = ageAux;
          this.rechargeUser();
        }else{
          alert('Your age cannot be 0 or less');
        }
      }else{
        alert('Please, set a valid age, no text characters or blank space allowed');
      }
    }
      break; 

      case 'weight': 
      let weightInp = document.getElementById("weightInp") as HTMLInputElement;
    if(weightInp){
      let weightAux = parseInt(weightInp.value);      
      if(!Number.isNaN(weightAux)){
        if(weightAux > 0){
          this.displayBlock("savedWeight");
          this.displayNone("savedLN");
          this.displayNone("savedAge");
          this.displayNone("savedFN");
          this.displayNone("savedHeight");
          this.user.weight =  weightAux;
          this.rechargeUser();
        }else{
          alert('Please, enter a valid weight number, your weight cannot be 0 or less');
        }
      }else{
        alert('Please, enter a valid number, no text characters or blank space is allowed');
      }
    }
      break; 

      case 'height': 
      let heightInp = document.getElementById("heightInp") as HTMLInputElement;
    if(heightInp){
      let heightAux = parseInt(heightInp.value);      
      if(!Number.isNaN(heightAux)){
        if(heightAux > 0){
          this.displayBlock("savedHeight");
          this.displayNone("savedLN");
          this.displayNone("savedAge");
          this.displayNone("savedWeight");
          this.displayNone("savedFN");
          this.user.height = heightAux;
          this.rechargeUser();
        }else{
          alert('Please, enter a valid height number, your height cannot be 0 or less');
        }
      }else{
        alert('Please, enter a valid number, no text characters or blank space is allowed');
      }
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
