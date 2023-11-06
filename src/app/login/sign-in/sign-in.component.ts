import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  ngOnInit(): void {
    
  }
  userList: Array<Usuario> = []
  @Input()
  emailAux: string = "";
  passAux: string = "";
  loginButton(event: Event) {
    event.preventDefault();
    let access: boolean = false;
    let i: number = 0;
    while(i<this.userList.length && !access) {
      if(this.userList[i].email == this.emailAux && this.userList[i].password == this.passAux) {
        access = true;
      }
    }
    if(access) {
      ///Arranca el programa
      console.log("INICIO EXITOSO");
      
    }else {
      `	<app-not-logged></app-not-logged>
      `
    }
  }
}
