import { Component, Input, OnInit } from '@angular/core';
import { usuario } from '../app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
  } 
  @Input()
     name: string = "";
     lastName: string = "";
     age: number = 0;
     weight: number = 0;
     height: number = 0;
     email: string = "";
     userName: string = "";
     pass: string = "";
  onSubmit(event: Event){
    let usuario1: usuario = new usuario(this.name, this.lastName, this.age, this.weight, this.height, this.email, this.userName, this.pass);
    let resultado: string = usuario1.verInfo();
    console.log(usuario1.verInfo());
  }
}

