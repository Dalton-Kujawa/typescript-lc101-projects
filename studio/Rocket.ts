import { Payload } from "./Payload";
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";



export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];
    constructor(name: string, totalCapaccityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapaccityKg;
        this.cargoItems = [];
        this.astronauts = [];
    };

    sumMass( items: Payload[] ): number {
        let sum = 0;
        for(let elements of items){
            sum += elements.massKg
        }
        return sum
    };

    currentMassKg(): number {

        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };

    canAdd(item: Payload): boolean{
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        }
        return false;
    };

    addCargo(cargo: Cargo): boolean {
        if(this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    };

    addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }

}