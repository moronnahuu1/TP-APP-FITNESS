export class Excercise {
    difficulty: string;
    equipment: string;
    instructions: string;
    muscle: string;
    name: string;
    type: string;
    id: number;
    reps: number;
    constructor(difficulty: string, equipment: string, instructions: string, muscle: string, name: string, type: string, id: number){
        this.difficulty = difficulty;
        this.equipment = equipment;
        this.instructions = instructions;
        this.muscle = muscle;
        this.name = name;
        this.type = type;
        this.id = id;
        this.reps = 0;
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
    getId(): number {
        return this.id;
    }
    getReps(): number {
        return this.reps;
    }
    setReps(amount: number) {
        this.reps = amount;
    }

}