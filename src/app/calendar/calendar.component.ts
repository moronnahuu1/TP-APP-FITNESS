import { Component, OnInit } from '@angular/core';
import { day } from '../models/day';
import { week } from '../models/week';
import { month } from '../models/month';
import { season } from '../models/season';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
currentDate = new Date();
actualDay: any;
months: Array<month> = [];
ngOnInit(): void {
  /*this.months = this.createCalendar(); ///ESTO YA NO HACE FALTA, ERA PARA CREARLO, AHORA SE LEE DE LOCAL STORAGE ABAJO
  let newSeason = new season(this.months.length, this.months, 2024);
  localStorage.setItem("2024", JSON.stringify(newSeason));*/
  let newSeasonStorage = localStorage.getItem("2024");
  let newSeason: season;
  if(newSeasonStorage){
    newSeason = JSON.parse(newSeasonStorage);
    this.months = newSeason.months;
  }
}
isCurrentDay(dayNumber: number, monthNumber: number): boolean{
  let actualMonth = this.currentDate.getMonth()+1;
  this.actualDay = this.currentDate.getDate();
  if(actualMonth == monthNumber && this.actualDay == dayNumber){
    return true;
  }else{
    return false;
  }
}
currentDateStyle(month: number, date: number){
  let actualMonth = this.months[month+1];
  this.actualDay = actualMonth.days[date];
}
createCalendar(){
  let months: Array<month> = [];
  let days: Array<day> = [];
  for(let i=1; i<=12; i++){
    switch(i){
      case 1:
        days = this.createDaysAndWeeks(31, 1);
        let january = new month('January', days, 1);
        months.push(january);
        break;
      case 2:
        days = this.createDaysAndWeeks(29, 4);
        let february = new month('February', days, 2);
        months.push(february);
        break;
      case 3:
        days = this.createDaysAndWeeks(31, 5);
        let march = new month('March', days, 3);
        months.push(march);
        break;
      case 4:
        days = this.createDaysAndWeeks(30, 1);
        let april = new month('April', days, 4);
        months.push(april);
        break;
      case 5: 
        days = this.createDaysAndWeeks(31, 3);
        let may = new month('May', days, 5);
        months.push(may);
        break;
      case 6:
        days = this.createDaysAndWeeks(30, 6);
        let june = new month('June', days, 6);
        months.push(june);
        break;
      case 7:
        days = this.createDaysAndWeeks(31, 1);
        let july = new month('July', days, 7);
        months.push(july);
        break;
      case 8:
        days = this.createDaysAndWeeks(31, 4);
        let august = new month('August', days, 8);
        months.push(august);
        break;
      case 9:
        days = this.createDaysAndWeeks(30, 7);
        let september = new month('September', days, 9);
        months.push(september);
        break;
      case 10:
        days = this.createDaysAndWeeks(31, 2);
        let october = new month('October', days, 10);
        months.push(october);
        break;
      case 11:
        days = this.createDaysAndWeeks(30, 5);
        let november = new month('November', days, 11);
        months.push(november);
        break;
      case 12:
        days = this.createDaysAndWeeks(31, 7);
        let december = new month('December', days, 12);
        months.push(december);
        break;
    }
  }
  return months;
}
createDaysAndWeeks(daysNumber: number, dayAux: number){
  let weekNumber: number = 1;
  let days: Array<day> = [];
  ///let weeks: Array<week> = [];
  for(let i=1; i<=daysNumber; i++){
    if(dayAux==8){ /// DayAux es el dia de la semana, para guiarse con lunes/martes/miercoles y asi. Si es 8 significa que ya paso el domingo, entonces lo vuelve a 1 y empieza en lunes.
      weekNumber ++;
      dayAux = 1;
    }
    switch(dayAux){
      case 1:
        let monday = new day(i, 'Monday');
        days.push(monday);
        break;
      case 2:
        let tuesday = new day(i, 'Tuesday');
        days.push(tuesday);
        break;
      case 3:
        let wednesday = new day(i, 'Wednesday');
        days.push(wednesday);
        break;
      case 4:
        let thursday = new day(i, 'Thursday');
        days.push(thursday);
        break;
      case 5:
        let friday = new day(i, 'Friday');
        days.push(friday);
        break;
      case 6:
        let saturday = new day(i, 'Saturday');
        days.push(saturday);
        break;
      case 7:
        let sunday = new day(i, 'Sunday');
        days.push(sunday);
        break;
    }
    dayAux++;
  }
  return days;
}
}
