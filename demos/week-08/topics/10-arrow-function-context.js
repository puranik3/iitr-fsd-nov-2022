// run this example in the browser console
function outer() {
    console.log( 'context outer = ', this ); // new object passed

    const innerOld = function() {
        console.log( 'context innerOld = ', this ); // window in the browser
    };

    innerOld();

    // arrow functions do not have a context of their own! they just use the context in the scope
    const innerNew = () => {
        console.log( 'context innerNew = ', this ); // new object passed
    };

    innerNew();
}

outer.call({ name: 'John', age: 32 });