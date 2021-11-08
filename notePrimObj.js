/* Primitives

Value Types

- Number
- String
- Boolean 
- Symbol
- Undefined 
- Null

*/

let x = 10;
let y = x;

x = 20;

console.log(x); //print 20
console.log(y); //print 10

/* Objects

Reference Types

- Objects
- Function
- Array

*/

let a = {value: 10};
let b = a;

a.value = 20;

console.log(a); //print 20
console.log(b); //print 20


/* Primitives are copied by their VALUE

Objects are copied by their REFERENCE*/



// FUNCTIONS WITH PRIM AND OBJ 

let number = 10;

function increase (number){
    number++
}

increase (number);
console.log(number); //print 10

let obj = {value: 10};

function increase(obj){
    obj.value++;
}

increase(obj);
console.log(obj); //print 11