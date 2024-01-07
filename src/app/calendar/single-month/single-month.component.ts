import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Display } from 'src/app/display/display';
import { SearchBarComponent } from 'src/app/excercises/search-bar/search-bar.component';
import { day } from 'src/app/models/day';
import { month } from 'src/app/models/month';
import { season } from 'src/app/models/season';

@Component({
  selector: 'app-single-month',
  templateUrl: './single-month.component.html',
  styleUrls: ['./single-month.component.css']
})
export class SingleMonthComponent implements OnInit {
  monthSelected: month = new month('', [], 0, 0);
  months: Array<month> = [];
  season: season = new season(0, [], 0);
  currentDate = new Date();
  actualDay: any;
  addButtonDisplayed: boolean = false;
  selectedDay: any;
  ngOnInit(): void {
      let monthStorage = localStorage.getItem("monthSelected");
      if(monthStorage){
        this.monthSelected = JSON.parse(monthStorage);
        console.log(this.monthSelected.days);
        
      }
      let seasonAux = localStorage.getItem("2024");
      if(seasonAux){
        this.season = JSON.parse(seasonAux);
        this.months = this.season.months;
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
  changeMonth(option: string){
    if(option === "previous"){
      if(this.monthSelected.monthNumber==1){
        alert("No se puede volver al año anterior");
      }else{
        this.monthSelected = this.months[this.monthSelected.monthNumber-2];
        localStorage.setItem("monthSelected", JSON.stringify(this.monthSelected));
      }
    }else{
      if(this.monthSelected.monthNumber==12){
        alert("No se puede avanzar al siguiente año hasta el momento");
      }else{
        this.monthSelected = this.months[this.monthSelected.monthNumber];
        localStorage.setItem("monthSelected", JSON.stringify(this.monthSelected));
      }
    }
    location.reload();
  }
  changeWindow(name: string){
    window.location.href = name;
  }
  displayQuest(nameBlock: string, buttonBlock: string, nameNone: string, buttonNone: string){
    Display.displayBlock(nameBlock);
    Display.displayBlock(buttonBlock);
    Display.displayNone(nameNone);
    Display.displayNone(buttonNone);
    this.addButtonDisplayed = true;
  }
  selectFirstDay(dayAux: day, monthAux: month){
    let firstDay = document.getElementById("selectStart");
    let lastDay = document.getElementById("selectFinish");
    if(firstDay){
      if(firstDay.style.display == 'block' && lastDay?.style.display == 'none'){
        localStorage.removeItem("firstDayCalendar");
        localStorage.setItem("firstDayCalendar", JSON.stringify(dayAux));
        localStorage.removeItem("firstMonthCalendar");
        localStorage.setItem("firstMonthCalendar", JSON.stringify(monthAux));
        this.selectedDay = dayAux;
      }
    }
      if(lastDay){
        if(lastDay.style.display == 'block' && firstDay?.style.display == 'none'){
          localStorage.removeItem("lastDayCalendar");
          localStorage.setItem("lastDayCalendar", JSON.stringify(dayAux));
          localStorage.removeItem("lastMonthCalendar");
          localStorage.setItem("lastMonthCalendar", JSON.stringify(monthAux));
          this.selectedDay = dayAux;
        }
      }
  }
}
