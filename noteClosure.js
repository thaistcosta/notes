// CLOSURE 

// Functions can be returned from other functions

function createFunction(){
    function multiplyBy2(num){
        return num * 2;
    }
    return multiplyBy2;
}

const secondLabel = createFunction;

const generatedFunc = createFunction(); // Here actually is generatedFunc = function multiplyBy2

const result = generatedFunc(3);

console.log(result); // Output: 6
console.log (generatedFunc(10)); // Output: 20
console.log(secondLabel(3)); // Output: [Function: multiplyBy2] --> Ignored because createFunction doesn't accept parameters 
console.log(createFunction(3)); // Output: [Function: multiplyBy2] --> Just to show that doesn't accept parameters
// console.log(multiplyBy2(3)); --> should throw an error because multiplyBy2 is not stored in the Global Memory

// GLOBAL MEMORY: 
// 1. Declare and store in the Global Memory createFunction = F (function definition = the whole description of the function) 
// 2. Create constant called secondLabel and will be assign the function definition of createFunction
// 3. Store the output of running createFunction until I get the output is actually nothing stored

// LOCAL MEMORY - Execution Context of generatedFunc = createFunction()
// 1. Declare multiplyBy2

// LOCAL MEMORY - Execution Context of result = generatedFunc(3)
// 1. num: 3



// Calling a function outside of the function call in which it was defined

function outer(){
    let counter = 0;
    function incrementCounter(){
        return counter++;
    }
    return incrementCounter;
}

const myNewFunction = outer();

console.log(myNewFunction()); // Output: 0 --> if let counter = 0 was declared outside outer() the Output would be : 0
console.log(myNewFunction()); // Output: 1 --> if let counter = 0 was declared outside outer() the Output would be : 1

//GLOBAL MEMORY
// 1. Declare outer that takes no arguments and the function definition
// 2.1 Declare a constant named myNewFunction and store the output of outer function but until there is nothing stored. myNewFuction = incrementCounter definition
// 2.2 As I bring the function definition of incrementCounter I bring as well all the data/variables that is refered inside the function definition of incrementCounter (let counter = 0)
// Names: Closure, Persistant Lexical Scope Reference Data, Closed Over Variable Enviroment

//LOCAL MEMORY - Execution Context of myNewFunction = outer();
// 1. counter: 0
// 2. declare incrementCounter 


const anotherFunction = outer();

console.log(anotherFunction()); // Output: 0 --> if let counter = 0 was declared outside outer() the Output would be : 3
console.log(anotherFunction()); // Output: 1 --> if let counter = 0 was declared outside outer() the Output would be : 4

// Closures gives our function persistant memories 