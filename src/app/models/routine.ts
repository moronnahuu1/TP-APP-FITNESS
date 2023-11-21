import { Excercise } from "./excercise";

export class routine {
    name: string;
    id: number;
    excerciseList: Excercise[];
    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
        this.excerciseList = [];
    }
    getName(): string {
        return this.name;
    }
    getId(): number {
        return this.id;
    }
    getExcercises(): Excercise[] {
        return this.excerciseList;
    }
}