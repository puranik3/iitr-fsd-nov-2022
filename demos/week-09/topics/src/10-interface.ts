interface IPerson {
    readonly name: string,
    age: number,
    spouse?: Person
    celebrateBirthday: () => number
}

// Interfaces can enforce properties/methods on class object
// Interfaces can also be used as types for objects!

const john : IPerson = {
    name: 'John',
    age: 32,
    celebrateBirthday() {
        this.age++;
        return this.age;
    }
};

export {
    IPerson
};