function printPerson( person, getTitle ) {
    var title = getTitle(person);
    console.log( title + ' ' + person.name + ' is ' + person.age + ' years old' );
}

var john = {
    name: 'John Doe',
    age: 32,
    gender: 'male'
};

function getEnglishTitle( person ) {
    var title = person.gender === 'female' ? 'Ms.' : 'Mr.';
    return title;
}

// person = john
// getTitle = getEnglishTitle
printPerson( john, getEnglishTitle );

printPerson(
    { // person is assigned this object
        name: 'Jane Doe',
        age: 28,
        gender: 'female'
    },
    function( person ) { // getTitle is assigned this function
        var title = person.gender === 'female' ? 'Madame' : 'Monsieur';
        return title;
    }
)