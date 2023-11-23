import { routine } from "./routine";

export class Usuario {
    firstName: string | undefined;
    lastName: string | undefined;
    age: number | undefined;
    weight: number | undefined;
    height: number | undefined;
    gender: string | undefined;
    email: string;
    userName: string;
    password: string;
    userRoutines: Array<routine>

    constructor(email: string, userName: string, password: string, firstName?: string, lastName?: string, age?: number, weight?: number, height?:number, gender?:string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.weight = weight;
      this.height = height;
      this.email = email;
      this.userName = userName;
      this.password = password;
      this.gender = gender;
      this.userRoutines = [];
    }
    
    getEmail(){
      return this.email;
    }
    
    
    
  }
  