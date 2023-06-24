// array iterator methods -> pass an iterator function as the first argument
const persons = [
    { name: 'John', age: 32, city: 'Bangalore' },
    { name: 'Jane', age: 28, city: 'Bangalore' },
    { name: 'Mark', age: 40, city: 'Hyderabad' },
    { name: 'Mary', age: 44, city: 'Hyderabad' },
    { name: 'David', age: 60, city: 'Delhi' }
];

// we want to increment age for each person
// for( var i = 0; i < persons.length; i++ ) {

// }
// instead use forEach()
// persons.forEach(function( p ) {
//     p.age++;
// });
persons.forEach( p => p.age++ );

console.log( persons );

// we want an array of persons from Hyderabad
// filter() returns an array with a subset of items
var hyderabadis = persons.filter(function( p ) {
    return p.city === 'Hyderabad' /*|| p.city === 'Delhi'*/;
});
console.log(hyderabadis);

// we want an array of names of persons
// [ 'John', 'Jane', 'Mark', 'Mary', 'David' ]
var names = persons.map(function( p, idx ) {
    return p.name;
});
console.log( names );

// get an array of the name of persons living in 'Hyderabad'
/**
[
    { name: 'Mark', age: 40, city: 'Hyderabad' },
    { name: 'Mary', age: 44, city: 'Hyderabad' },
] ->
[ 'Mark', 'Mary' ]
*/
const namesOfHyderabadis = persons.filter(function( p ) {
    return p.city === 'Hyderabad' /*|| p.city === 'Delhi'*/;
}).map(function( ph ) {
    return ph.name;
});
console.log( namesOfHyderabadis );