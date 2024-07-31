import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-routines',
  templateUrl: './my-routines.component.html',
  styleUrls: ['./my-routines.component.css']
})
export class MyRoutinesComponent implements OnInit{
  addToCalendar: boolean = false;

  ngOnInit(): void {
      this.addToCalendar = this.verifyCalendar();
  }

  verifyCalendar(){
    if(localStorage.getItem('addCalendar')){
      localStorage.removeItem('addCalendar');
      return true;
    }else{
      return false;
    }
  }
}
