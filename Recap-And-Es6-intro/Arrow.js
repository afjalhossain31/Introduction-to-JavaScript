// console.log(add(10, 20));
// function declaration

function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 20));

// function expression
const add2 = function (num1, num2) {
    return num1 + num2;
}
console.log(add2(30, 40));

// arrow function
const add3 = (num1, num2) => num1 + num2;
console.log(add3(50, 60));

const multiple = (a, b) => a * b;

const tenTimes = x => x * 10;
const tenTimes2 = (x) => x * 10;
const getPi = () => 3.1416;
const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;
const isEven = num => num % 2 === 0;

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
console.log(doMath(20, 10));


const divide = (p, q) => p / q;
console.log(divide(100, 20));

const sub = (p, q) => p - q;
console.log(sub(100, 30));
const multiply = (p, q) => p * q;
console.log(multiply(100, 20));

// document.getElementById('btn').addEventListener('click', () =>{})
// document.getElementById('btn').addEventListener('click',  (event) => {});




// (params) => expression           // Single line = implicit return
// (params) => { return value; }   // Multi-line = explicit return
// x => x * 10                     // Single param = no parens
// () => 3.14                      // No params = empty parens
