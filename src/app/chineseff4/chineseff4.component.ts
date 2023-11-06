import { Component } from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';
import { ExcercisesComponent } from '../excercises/excercises.component';
@Component({
  selector: 'app-chineseff4',
  templateUrl: './chineseff4.component.html',
  styleUrls: ['./chineseff4.component.css']
})
export class Chineseff4Component {
   /*axios = require('axios');

   options = {
    method: 'GET',
    url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
    params: {muscle: 'biceps'},
    headers: {
      'X-RapidAPI-Key': '9199c93dfdmshb81cf20b6d2cf40p104aeajsn2274f1c47343',
      'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
    }
  };

  async fetchData() {
    try {
      const response = await this.axios.request(this.options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  async getData() {
    try {
      await this.fetchData();
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  }*/

}

// Ejecuta fetchData llamando a getData()
//const instance = new Chineseff4Component();
//instance.getData();
