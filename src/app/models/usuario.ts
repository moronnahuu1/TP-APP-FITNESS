export class Usuario {
    firstName: string | undefined;
    lastName: string | undefined;
    age: number | undefined;
    weight: number | undefined;
    height: number | undefined;
    email: string;
    userName: string;
    password: string;
  
    constructor(email: string,userName: string,password: string,firstName?: string,lastName?: string,age?: number,weight?: number,height?: number ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.weight = weight;
      this.height = height;
      this.email = email;
      this.userName = userName;
      this.password = password;
    }
  }
