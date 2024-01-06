import { day } from "./day";

export class week{
    weekNumber: number;
    weekDaysNumber: number;
    days: Array<day>;
    constructor(weekNumber: number, weekDaysNumber: number, days: Array<day>){
        this.weekNumber = weekNumber;
        this.weekDaysNumber = weekDaysNumber;
        this.days = days;
    }
}