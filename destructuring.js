// Destructuring Arrays

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = [1,2,3,4,5,6];

const [a,,c,...rest] = alphabet;

const mergeArray = [...alphabet, ...numbers];

console.log(a); // A
console.log(c); // C
console.log(rest);  // ['D','E','F']
console.log(mergeArray);    // ['A', 'B', 'C', 'D', 'E', 'F', 1, 2, 3, 4, 5, 6]

function sumAndMultiply (a,b) {
    return [a+b, a*b];
}

const result = sumAndMultiply(2,5);

console.log(result);    // [7,10]

const [sum, multiply] = sumAndMultiply(2,5);

console.log(sum);   // 7
console.log(multiply);  // 10

// Destructuring Objects

const horse = {
    name: 'Urze',
    age: 21,
    owner: {
        name: 'Isa',
        address: 'Cascais'
    }
}

const {name: horseName, age, favoriteFood = 'apples', owner: {name}} = horse;

console.log(horseName); // 'Urze'
console.log(age);   // 21
console.log(favoriteFood);  // 'apples'
console.log(name);  // 'Isa'

const user1 = {
    name: 'Joe',
    score: 500,
    login: {
        username: 'joe@2',
        email: 'joe@test.com'
    }
}


const user2 = {
    score: 1000,
    avatar: 'Bunny'
}

const user3 = {...user1, ...user2};

console.log(user3); // { name: 'Joe', score: 1000, login: {username: 'joe@2', email: 'joe@test.com'}, avatar: 'Bunny'}

// Without destructuring

// function printUser(user) {
//    console.log(user);
//    console.log(user.name);
//    console.log(user.score);
// }

// With destructuring

function printUser ({name, score}) {
    console.log(name);
    console.log(score);
}

printUser(user1);   // 'Joe' 500

