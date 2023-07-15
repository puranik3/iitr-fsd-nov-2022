// no block scope (var)
for( var i = 0; i < 10; i++ ) {
    console.log( i );
}

console.log( i ); // no error

// USE let (NOT var)
// block scope (let)
for( let j = 100; j < 110; j++ ) {
    console.log( j );
}

// console.log( j ); // error

// re-assignment is NOT allowed
const c = 300_000; // must give initial value
// c++; // error -> const

const john = {
    name: 'John',
    age: 32
};

john.age++; // no error -> increases age
console.log( john );

// error (re-assignment not allowed)
john = {
    name: 'John',
    age: 34
};