var obj = {
    name: 'John Doe',
    age: 32
};

// john and obj are references to the SAME object
var john = obj;

console.log( obj.name );
console.log( john.name );

// Functions are "first-class citizens"
function sum( x, y ) {
    var result = x + y;
    return result;
}

// add and sum are reference to the SAME function
var add = sum; // You are NOT calling the function

console.log( sum( 12, 13 ) );
console.log( add( 12, 13 ) );