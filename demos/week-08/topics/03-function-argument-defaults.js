function greet( message, name = 'amigo' ) {
    return `${message} ${name}!`;
}

console.log( greet( 'Good morning', 'John' ) );
console.log( greet( 'Good morning' ) );