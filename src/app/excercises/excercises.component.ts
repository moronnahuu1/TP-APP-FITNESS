import { Component, OnInit } from '@angular/core';
import { Excercise } from '../models/excercise';
import { ExcerciseService } from '../excercise.service'; // Ruta relativa para navegar hacia atrás y luego al servicio
@Component({
  selector: 'app-excercises',
  templateUrl: './excercises.component.html',
  styleUrls: ['./excercises.component.css']
})
export class ExcercisesComponent implements OnInit{
  ngOnInit(): void {
    window.addEventListener('scroll', (): void => {
      const yPos: number = -window.scrollY / 8; 
      document.body.style.backgroundPositionY = yPos + 'px';
    });
  }
}