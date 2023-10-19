import { Component } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chinesef4';
}
export class usuario{
  private firstName: string;
  private lastName: string;
  private age: number;
  private weight: number;
  private height: number;
  private email: string;
  private userName: string;
  private password: string;

  constructor(firstName: string, lastName: string, age: number, weight: number, height: number, email: string, userName: string, password: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.email = email;
    this.userName = userName;
    this.password = password;
  }
  verInfo(): string {
    let info: string = "";
    info += "Nombre: "+this.firstName+"\nApellido: "+this.lastName+"\nEdad: "+this.age;
    return info;
  }
}