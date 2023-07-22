import { IPerson } from './10-interface';

type Department = 'HR' | 'Finance' | 'Operations' | 'IT' | 'Sales';

interface IEmployee {
    role: string,
    department: Department // type literals - using values as types
}

class Employee implements IPerson, IEmployee {
    // public readonly name: string;
    // public age: number;
    public spouse?: Person;
    // public role: string;
    // public department: Department;

    constructor( public readonly name: string, public age: number, public role : string, public department : Department, spouse? : Person ) {
        // this.name = name;
        // this.age = age;
        // this.role = role;
        // this.department = department;
        
        if( spouse ) {
            this.spouse = spouse;
        }

    }
    
    public celebrateBirthday() {
        this.age++;
        return this.age;
    }
}

const john = new Employee( 'John', 32, 'Executive', 'Sales' );
console.log( john );