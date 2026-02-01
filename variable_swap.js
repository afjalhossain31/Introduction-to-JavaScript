// 1. Using a temporary variable
let a = 50;
let b = 10;

let temp = a;
a = b;
b = temp;

console.log("Swap with temp:", a, b); 

a = 5;
b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log("Swap without temp:", a, b); 

a = 5;
b = 10;

[a, b] = [b, a];

console.log("Swap using :", a, b); 

