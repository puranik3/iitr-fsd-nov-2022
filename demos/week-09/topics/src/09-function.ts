// 2 ways to give data type for a function

// syntax 1 -> not applicable for callback functions
function sum( x : number, y : number ) : number {
    return x + y;
}

sum( 12, 13 );
// sum( 12, 'hello' ); // error

// syntax 2 -> applicable in all situations (except function declaration syntax)
// const add = ( x : number, y : number ) : number => x + y;

type BinaryFunction = ( x : number, y : number/*, z? : number*/ ) => number

const add : BinaryFunction  = ( x , y ) =>  x + y;
const multiply : BinaryFunction  = ( x , y ) =>  x * y;

add( 12, 13 );
// add( 12, 13, 14 ); // error
// add( 12, 'hello' ); // error

export {}