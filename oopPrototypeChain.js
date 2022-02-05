// OOP 
// 1. Easy to add features and functionality
// 2. Performant (efficient in terms of memory)
// 3. Easy for us and other developers to reason about(a clear structure)

// Objects - store functions nwith their associated data

const user1 = {
    name: 'Will',   // I declare a fully populated object literal
    score: = 3,
    increment = function (){
        user1.score++;
    }
};

user1.increment(); // user1.score => 4

// This is the principle of encapsulation =>  binding togheter the data and functionality that manipulates that data

// Creating user2 user 'dot notation'

const user2 = {};   // create an empty object

user2.name = 'Tim'; // aassign properties to that object
user2.score = 6;
user2.increment = function (){
    user2.score++;
}

// Creating user3 using Object.create

const user3 = Object.create(null);

user3.name = 'Eva';
user3.score = 9;
user3.increment = function (){
    user3.score++;
}

// Generate objects using a function

function userCreator(name, score){
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function (){
        newUser.score++;    
    }
    return newUser;
};

const user1 = userCreator('Will', 3);
const user2 = userCreator('Tim', 5);
user1.increment();

// Prototype Chain => built-in feature that let me make a link to the shared function store


// 1:

function userCreator (name, score){
    const newUser = Object.create(functionStore);   // this Object.create is going to be an empty object and will be assign to newUser constant. This empty object have a special bond, a hidden reference to use the 'functionStore' => _proto_ : functionStore
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const functionStore = {
    increment: function (){this.score++},   // the 'this' keyword is a default label
    login: function (){console.log("You're loggedin");}
};

const user1 = userCreator('Will', 3);
const user2 = userCreator('Tim', 5);
user1.increment()

// 2:

// The 'new' keyword automates 2 things (create a new user object and return the new user object).

const user1 = new userCreator('Will', 3)

// 3:

// .prototype

function UserCreator(name, score){  // It is a function and also an object. The first letter should be in upper case so I know tha I need to use the 'new' keyword
    this.name = name;
    this.score = score;
}
UserCreator.prototype.increment = function(){   // The prototype property is an empty object
    this.score++;
}
UserCreator.prototype.login = function(){
    console.log('login');
};

const user1 = new UserCreator('Eva', 9) // The 'new' keyword is going to create an empty object by default and label as the keyword 'this' by default. And 'this' object got a hidden reference to the prototype (_proto_ => UserCreator.prototype)

user1.increment()

// 4:

// Class 'Syntatic Sugar'

class UserCreator{  // Class is a different data type
    constructor (name, score){
        this.name = name;
        this.score = score;
    }
    increment(){
        this.score++
    }
    login(){
        console.log('login')
    }
}

const user1 = new UserCreator('Eva', 7)

user1.increment();

// https://www.youtube.com/watch?v=aAAS9cEuFYI