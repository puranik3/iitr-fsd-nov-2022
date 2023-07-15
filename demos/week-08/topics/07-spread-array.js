// ... -> copy / merge arrays, copy / merge objects

// primitives are copied by value, non-primtives (object, arrays) are copied by reference

// NOTE:
// const arr3 = [arr1, arr2]; // creates a 2d array

const arr1 = [ 1, 2, 3 ], arr2 = [ 4, 5, 6 ];

const arr3 = [ ...arr1, ...arr2 ]; // copy by value since all are numbers

console.log( arr3 ); // [ 1, 2, 3, 4, 5, 6 ]

arr3[0]++;

// arr1 is NOT affected
console.log( arr3 ); // [ 2, 2, 3, 4, 5, 6 ]
console.log( arr1 ); // [ 1, 2, 3 ]

const persons = [
    {
        name: 'John',
        age: 32
    },
    {
        name: 'Jane',
        age: 28
    }
];
const personsCopy = [ ...persons ]; // personsCopy = persons is different
personsCopy[0].age++;

// this new object will be added only to personsCopy
personsCopy.push({
    name: 'Mark',
    age: 40
});

console.log( personsCopy );
console.log( persons );