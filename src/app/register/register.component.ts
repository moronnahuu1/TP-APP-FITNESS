import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
  } 

  // //Cuando recibe los siguientes datos
  // @Input()
  //   userList : Array<Usuario> = [];
  //    email: string = "";
  //    userName: string = "";
  //    pass: string = "";

  //    addUser(){
  //     let newUser = new Usuario(this.email,this.userName, this.pass);
  //     this.userList.push(newUser);
  //     console.log (this.userList);
  //    }



  // onSubmit(event: Event){
  //   let usuario1: Usuario = new Usuario (this.email, this.userName, this.pass);
  //   // let resultado: string = usuario1.verInfo();
  //   // console.log(usuario1.verInfo());
  // }
}

