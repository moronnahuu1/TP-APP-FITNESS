import { day } from "./day";
import { week } from "./week";

export class month {
    name: string;
    days: Array<day>;
    monthNumber: number;
    startDayNumb: number;
    constructor(name: string, days: Array<day>, monthNumber: number, startDayNumb: number){
        this.name = name;
        this.days = days;
        this.monthNumber = monthNumber;
        this.startDayNumb = startDayNumb;
    }
}