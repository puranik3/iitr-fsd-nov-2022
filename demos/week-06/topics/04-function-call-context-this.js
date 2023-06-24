// "this" keyword -> context
console.log(this); // "window" / "global"

function foo() {
    // "window" / "global"
    console.log( "this = ", this ); 
}

foo();

var john = {
    name: 'John Doe',
    age: 32,
    celebrateBirthday: function(x, y) {
        // console.log(this); // this -> john object
        this.age++;
    }
};

john.celebrateBirthday( 12, 13 );
console.log( john );

// this is set to some default value
// but the value of "this" in a function can be changed during a call
// This was jane has "borrowed" john's celebrateBirthday
var jane = {
    name: 'Jane Doe',
    age: 28,
    gender: 'female'
};

// "this" -> jane object
john.celebrateBirthday.call( jane, 12, 13 ); // x = 12, y = 13
console.log( john, jane );