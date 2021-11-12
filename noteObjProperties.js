// Iterate or Enumerate over properties in an Object

var triangle = {a: 1, b: 2, c: 3};

function ColoredTriangle(size) {
  this.color = 'red';
  this.size = size
  this.draw = function(){
      console.log('draw')
  }
}

ColoredTriangle.prototype = triangle;  // the (.prototype) property allows me to add new methods and properties to objects constructor (only my own prototype, never modify standard JS)  

var obj = new ColoredTriangle(5);   // creating a variable named obj and assigning a new Object instance followed by the function name with 5 as a parameter

for (const prop in obj) {               // this is how I can enumerate all the properties and methods in an Object
      console.log(prop);
  }


// Output: color, size, draw, a, b, c 

for (const prop in obj){            
    console.log(prop, obj[prop])        // with the bracket notation I can acess a member/ values of the properties and methods
}

// Output: color red, size 5, draw [Function (anonymous)], a 1, b 2, c 3

const key = Object.keys(obj);           // this is going to return an array whose elements are strings corresponding to the enumerable properties found DIRECTLY upon an Object
console.log(key);

// Output: ['color', 'size', 'draw']

for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {         // I can use if condition to check for the existence of a property/method 
      console.log(`obj.${prop} = ${obj[prop]}`);
    }
  }

  // Output: 'obj.color = red', 'obj.size = 5', 'obj.draw = function(){console.log('draw)}'