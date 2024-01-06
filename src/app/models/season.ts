import { month } from "./month";

export class season {
    year: number;
    monthsNumber: number;
    months: Array<month>;
    constructor(monthsNumber: number, months: Array<month>, year: number){
        this.year = year;
        this.monthsNumber = monthsNumber;
        this.months = months;
    }
}