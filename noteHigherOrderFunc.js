function copyArrayAndManipulate(array, instruction){
    let output = []
    for(let i = 0; i < array.length; i++){
        output.push(instruction(array[i]));
    }
    return output;
}

function multiplyBy2(input){
    return input * 2;
}

let result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

console.log(result) // Output: [2, 4, 6]

//console.log(output)  should throw an error because the output is not defined in the Global Memory

// GLOBAL MEMORY
// 1. Declare a function called copyArrayAndManipulate and the function definition 
// 2. Declare another function multiplyBy2 and the function definition
// 3. Declare a variable called result = (undefined) until I get the return value from the call of copyArrayAndManipulate

// LOCAL MEMORY
// 1. array: [1, 2, 3]
// 2. instructions: F (function definition of multiplyBy2)
// 3. output = []

//https://www.youtube.com/watch?v=viQz4nUUnpw&t=2027s
