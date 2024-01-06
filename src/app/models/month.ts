import { day } from "./day";
import { week } from "./week";

export class month {
    name: string;
    days: Array<day>;
    monthNumber: number;
    constructor(name: string, days: Array<day>, monthNumber: number){
        this.name = name;
        this.days = days;
        this.monthNumber = monthNumber;
    }
}