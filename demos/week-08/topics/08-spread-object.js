// Shallow copy
    // primitives are copied by value
    // non-primitives are copied by reference
const john = {
    name: 'John',
    age: 32,
    address: {
        city: 'Hyderabad'
    }
};

const johnCompany = {
    company: 'Great Learning',
    role: 'Operations Manager'
};

const johnMasterDetails = {
    ...john,
    ...johnCompany,
    dept: 'Operations',
    age: 31,
};

console.log( johnMasterDetails );

johnMasterDetails.age++; // does not affect john (Copied by value)
johnMasterDetails.address.city = 'Mumbai'; // affects john (Copied by reference)

console.log( john );

// Deep copy?
    // Please refer to the videos