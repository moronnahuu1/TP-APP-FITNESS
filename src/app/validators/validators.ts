
export class Validators {
      static validateInput(input: string): boolean {
        if(input.length == 0){
            alert("You cannot left this empty");
        }
        return input.length > 0;
      }
      static validatePassword(password: string) {
        const regexMayuscula = /[A-Z]/;
      const regexNumero = /[0-9]/;
      if(password.length == 0){
        alert("Password cannot be empty");
        return false;
      }else{
        if(password.length<8){
          alert("Password must contain 8 characters");
          return false;
        }else {
          if(!regexMayuscula.test(password)){
            alert("Password must contain an uppercase");
            return false;
          }else{
            if(!regexNumero.test(password)){
              alert("Password must contain a number");
              return false;
            }
          }
        }
      }
      return true;
      }

      static validateEmail(email: string){
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        console.log(email);
        console.log(regexEmail.test(email));
        
        return regexEmail.test(email);
      }

    // static emailExists(usuario: Usuario): AsyncValidatorFn {       
    //   return (control: AbstractControl): Promise<{ [key: string]: any } | null> => {
    //     if (control.value == '') {
    //       return Promise.resolve(null);
    //     } else {
    //       return usuario.getEmail()
    //         .then(response => {
    //           return response !== null ? { 'emailExists': { value: control.value } } : null;
    //         })
    //         .catch(() => {
    //           return null; // Manejar errores aquí si es necesario
    //         });
    //     }
    //   };
    // }

}

