type NS = number | string;

let primes : number[] = [];
// let primes : Array<number> = [];

primes.push( 2 );
// primes.push( 'hello' ); // error

let chequeAmounts : NS[] = [];

// chequeAmounts = 10000;

chequeAmounts.push( 10000 );
chequeAmounts.push( 20000 );
chequeAmounts.push( 'Thirty thousand' );
// chequeAmounts.push( false );

export {}