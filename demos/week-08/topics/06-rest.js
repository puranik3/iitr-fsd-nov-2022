// ... (rest, spread operators are overloaded)

// Please check rest operator
const john = {
    name: 'John',
    age: 32,
    emails: [
        'john@example.com',
        'john@gmail.com'
    ],
    address: {
        city: 'Hyderabad',
        pinCode: 640100,
        area: 'Madhapur'
    }
};

const {
    name,
    address: {
        city,
        ...otherDetailsAddress
    },
    ...otherDetails
} = john;

console.log( otherDetails );
console.log( otherDetailsAddress );
