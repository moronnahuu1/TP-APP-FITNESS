import { Component, OnInit } from '@angular/core';
import { ExcerciseService } from 'src/app/excercise.service';
import { Excercise } from 'src/app/models/excercise';
import { Usuario } from 'src/app/models/usuario';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
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
  changeWindow(name: string){
    if(name == "lastPassButtonMail"){
      this.displayNone("change");
      this.displayBlock("lastPasswordSetMail");
    }else{
      this.displayNone("change");
      this.displayBlock("lastPasswordSet");
    }
  }
  checkPassword(){
    let miInput = document.getElementById("lastPassInp") as HTMLInputElement;
    if(miInput){
      let passAux = miInput.value;
      if(this.user.password == passAux){
        this.displayNone("lastPasswordSet");
        this.displayBlock("passwordChange");
      }
    }
  }
  checkPasswordForMail(){
    let miInput = document.getElementById("lastPassInpMail") as HTMLInputElement;
    if(miInput){
      let passAux = miInput.value;      
      if(this.user.password == passAux){        
        this.displayNone("lastPasswordSetMail");
        this.displayBlock("emailChange");
      }
    }
  }
  changePassword(){
    let miInput = document.getElementById("newPassInp") as HTMLInputElement;
    if(miInput){
      let passAux = miInput.value;
      this.user.password = passAux;
      localStorage.setItem("oneUser", JSON.stringify(this.user));
      if(this.user.id != undefined){
        this.usersList[this.user.id] = this.user;
        this.userService.users = this.usersList;
        this.userService.persistirDatos();
        console.log("PERSISTIDO NUEVAMENTE CON CONTRASENA CAMBIADA");
        
      }
    }
  }
  changeEmail(){
    let miInput = document.getElementById("newMailInp") as HTMLInputElement;
    if(miInput){
      let mailAux = miInput.value;
      let change = this.verifyMail(mailAux);
      if(change){
        this.user.email = mailAux;
        localStorage.setItem("oneUser", JSON.stringify(this.user));
        if(this.user.id != undefined) {
        this.usersList[this.user.id] = this.user;
        this.userService.users = this.usersList;
        this.userService.persistirDatos();
        console.log("PERSISTIDO NUEVAMENTE CON MAIL CAMBIADO");
        }
      }
    }
  }
  verifyMail(email: string): boolean{
    let i = 0
    let change = true;
    while(i<this.usersList.length && change == true) {
      if(email == this.usersList[i].email) {
        change = false;
      }else {
        i++;
      }
    }
    return change;
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
}
