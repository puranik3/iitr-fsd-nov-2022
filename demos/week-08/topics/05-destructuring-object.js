const john = {
    name: 'John',
    age: 32,
    emails: [
        'john@example.com',
        'john@gmail.com'
    ],
    address: {
        city: 'Hyderabad',
        pinCode: 640100
    }
};

// const name = john.name, age = john.age, primaryEmail = john.emails[0], city = john.address.city, pinCode = john.address.pinCode;

const {
    name,
    age,
    emails: [
        primaryEmail
    ],
    address: {
        city,
        pinCode
    }
} = john;

console.log( name, age, primaryEmail, city, pinCode );
