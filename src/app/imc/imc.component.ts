import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ImcService } from '../imc.service';
// import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})

export class ImcComponent implements OnInit{
  
  imcCalculator = new FormGroup ({
    edad: new FormControl('edad', [Validators.required]),
    altura: new FormControl('altura', [Validators.required]),
    peso: new FormControl('peso', [Validators.required])
  });


  // En el constructor del componente
  // constructor(private imcService: ImcService, private fb: FormBuilder) {
  // // Agrega otros campos aquí
  
  // }
  
  bmi() {
    if (this.imcCalculator.valid) {
    const altura = this.imcCalculator.value.altura;
    const peso = this.imcCalculator.value.peso;
    const edad = this.imcCalculator.value.edad;
    ImcService.bmi(edad,peso,altura).subscribe((response) => {
    // Maneja la respuesta, por ejemplo, redirige a la lista de productos
    this.router.navigate(['/bmi']);
    });
    }
    }

    ngOnInit() {
      // Aquí puedes consumir la API utilizando el servicio
      const age = 25;
      const gender = 'male';
      const height = 180;
      const weight = 70;
      const activityLevel = 'level_1';

      const url = `${this.apiUrl}?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activityLevel}`;

      this.http.get(url, { headers: this.headers }).subscribe((data) => {
        console.log(data);
        // Aquí puedes manejar la respuesta de la API
      }, (error) => {
        console.error(error);
      });
      
    }
  }







