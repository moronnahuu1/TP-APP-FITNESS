import { Excercise } from "./excercise";

export class routine {
    name: string;
    id: number;
    publicRoutine: boolean;
    excerciseList: Excercise[];
    userName: string | undefined;
    constructor(name: string, id: number, publicRoutine: boolean) {
        this.name = name;
        this.id = id;
        this.publicRoutine = publicRoutine;
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