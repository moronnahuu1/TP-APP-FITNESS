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
      this.displayNone("changeMessageH1");
      this.displayBlock("lastPasswordSetMail");
    }else{
      if(name == ''){
        window.location.href = name;
      }else{
        this.displayNone("change");
      this.displayNone("changeMessageH1");
      this.displayBlock("lastPasswordSet");
      }
    }
    this.displayBlock("currentPass");
  }
  checkPassword(){
    let miInput = document.getElementById("lastPassInp") as HTMLInputElement;
    if(miInput){
      let passAux = miInput.value;
      if(this.user.password == passAux){
        this.displayBlock("passwordChange");
        this.displayNone("lastPasswordSet");
        this.displayNone("incorrectPass");
      }else {
        this.displayBlock("incorrectPass");
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
        this.displayNone("incorrectPass");
      }else {
        this.displayBlock("incorrectPass");
      }
    }
  }
  changePassword(){
    let miInput = document.getElementById("newPassInp") as HTMLInputElement;
    if(miInput){
      let passAux = miInput.value;
      if (this.user.password == passAux) {
        this.displayBlock("samePass");
      }else {
        this.displayNone("passwordChange");
        this.displayNone("samePass");
        this.user.password = passAux;
        localStorage.setItem("oneUser", JSON.stringify(this.user));
        if(this.user.id != undefined){
        this.usersList[this.user.id] = this.user;
        this.userService.users = this.usersList;
        this.userService.persistirDatos();
        console.log("PERSISTIDO NUEVAMENTE CON CONTRASENA CAMBIADA");
        this.displayBlock("passChanged");
        }
      }
      this.displayBlock("backToMenu");
    }
  }
  verifyPass(password: string){
    if (this.user.password == password) {
      this.displayBlock("samePass");
    }
  }
  changeEmail(){
    let miInput = document.getElementById("newMailInp") as HTMLInputElement;
    if(miInput){
      let mailAux = miInput.value;
      let change = this.verifyMail(mailAux);
      if(change){
        this.displayNone("emailChange");
        this.displayNone("emailNotChanged");
        this.displayNone("sameEmail");
        this.user.email = mailAux;
        localStorage.setItem("oneUser", JSON.stringify(this.user));
        this.displayBlock("emailChanged");
        if(this.user.id != undefined) {
        this.usersList[this.user.id] = this.user;
        this.userService.users = this.usersList;
        this.userService.persistirDatos();
        console.log("PERSISTIDO NUEVAMENTE CON MAIL CAMBIADO");
        }
      }else {
      }
      this.displayBlock("backToMenu");
    }
  }
  verifyMail(email: string): boolean{
    let i = 0
    let change = true;
    if(this.user.id != undefined){
      if(this.usersList[this.user.id].email = email){
        change = false;
        this.displayNone("emailNotChanged");
        this.displayBlock("sameEmail");
      }
    }
    while(i<this.usersList.length && change == true) {
      if(email == this.usersList[i].email) {
        change = false;
        this.displayNone("sameEmail");
        this.displayBlock("emailNotChanged");
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
