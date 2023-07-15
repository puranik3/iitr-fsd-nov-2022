// old syntax #1 - function declaration
function sum1( x, y ) {
    return x + y;
}

// old syntax #2 - function expression
const sum2 = function( x, y ) {
    return x + y;
};

// new syntax #3 - ES2015 -> arrow function
// const sum3 = ( x, y ) => {
//     return x + y;
// };

const sum3 = ( x, y ) => x + y;

console.log( sum1( 12, 13 ) );
console.log( sum2( 12, 13 ) );
console.log( sum3( 12, 13 ) );