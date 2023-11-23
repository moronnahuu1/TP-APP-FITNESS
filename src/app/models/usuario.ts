import { routine } from "./routine";

export class Usuario {
    firstName: string | undefined;
    lastName: string | undefined;
    age: number | undefined;
    weight: number | undefined;
    height: number | undefined;
    email: string;
    userName: string;
    password: string;
    userRoutines: Array<routine>
    id: number | undefined;

    constructor(email: string,userName: string,password: string, id?: number, firstName?: string,lastName?: string,age?: number,weight?: number,height?: number ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.weight = weight;
      this.height = height;
      this.email = email;
      this.userName = userName;
      this.password = password;
      this.userRoutines = [];
      this.id = id;
    }
    
    getEmail(){
      return this.email;
    }
    
    
    
  }
  