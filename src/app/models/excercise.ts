export class Excercise {
    difficulty: string;
    equipment: string;
    instructions: string;
    muscle: string;
    name: string;
    type: string;
    constructor(difficulty: string, equipment: string, instructions: string, muscle: string, name: string, type: string){
        this.difficulty = difficulty;
        this.equipment = equipment;
        this.instructions = instructions;
        this.muscle = muscle;
        this.name = name;
        this.type = type;
    }
    getDifficulty(): string {
        return this.difficulty;
    }
    getEquipment(): string {
        return this.equipment;
    }
    getInstructions(): string {
        return this.instructions;
    }
    getMuscle(): string {
        return this.muscle;
    }
    getName(): string {
        return this.name;
    }
    getType(): string {
        return this.type;
    }
}