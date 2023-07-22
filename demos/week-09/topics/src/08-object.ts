type Person = {
    name: string,
    readonly age: number, // age cannot be changed
    spouse?: Person // optional property
};

let john : Person;

john = {
    name: 'John',
    age: 32,
}

// john.age++; // error - age is readonly

let jane : Person;

jane = {
    name: 'Jane',
    age: 28,
    spouse: john
};

john.spouse = jane;

console.log(john);
console.log(jane);