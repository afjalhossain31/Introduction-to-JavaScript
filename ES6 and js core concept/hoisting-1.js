//Hoisting is a JavaScript behavior in which variable and function declarations are moved ("hoisted") to the top of their containing scope during the compilation phase — before the code is executed

// var is hoisted, but only the declaration, not the value assignment
console.log(test); // undefined
var test = 123;
console.log(test);


// let and const also hoisted, but not initialization. They are in a "Temporal Dead Zone" from the start of the block until the declaration line.
// console.log(name);
let name = "Afjal Hossain";
console.log(name);

// console.log(age);
const age = 25;
console.log(age);