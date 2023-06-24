console.log( sum( 12, 13 ) ); // 25

// function declaration syntax
function sum( x, y ) {
    var result = x + y;
    return result;
}

console.log( add( 12, 13 ) ); // error

// Function expression syntax
var add = function( x, y ) {
    var result = x + y;
    return result;
};

console.log( add( 12, 13 ) ); // no error