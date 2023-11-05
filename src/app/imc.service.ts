import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, numberAttribute } from '@angular/core';
import { Observable } from 'rxjs';
import fetch from 'node-fetch';
@Injectable({
  providedIn: 'root'
})
export class ImcService {
  private apiUrl = 'https://fitness-calculator.p.rapidapi.com/bmi';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '951be20f45msh9e8fa08f6e7fdfdp1c25a8jsn3b39f807fb1f',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  });

  constructor(private http: HttpClient) {}

   bmi(edad: number, peso: number, altura: number) {
    return this.http.get(this.apiUrl+`bmi?age=${edad}&weight=${peso}&height=${altura}`);
  }
}
