# What is JavaScript
JavaScript ekta high-level, interpreted, single-threaded, dynamically typed programming language.   

## Table of Contents

1. **Basic Syntax & Variables**  
   How to write statements, comments, and declare variables with `var`, `let`, and `const`.

2. **Data Types**  
   Primitive types (number, string, boolean, null, undefined, symbol, bigint) and reference types (objects, arrays, functions).

3. **Operators**  
   Arithmetic (`+ - * / %`), comparison (`==`, `===`, `>`, `<`), logical (`&&`, `||`, `!`), and the ternary operator.

4. **Conditionals**  
   Decision making using `if`, `else if`, `else`, and `switch` to run different code based on conditions.

5. **Loops**  
   Repeating code with `for`, `while`, `do...while`, and controlling flow using `break` and `continue`.

6. **Functions**  
   Reusable blocks of code: function declarations, function expressions, arrow functions, parameters, and return values.

7. **Arrays**  
   Ordered lists of values, indexing, looping, and useful methods like `push`, `pop`, `map`, `filter`, `reduce`.

8. **Objects**  
   Key–value structures to group related data and behavior, object methods, and destructuring.

9. **Scope, Hoisting, var / let / const**  
    How variable visibility works (global, function, block scope), what hoisting is, and how `var`, `let`, `const` differ.

10. **Error Handling**  
    Handling runtime errors with `try`, `catch`, `finally`, and creating custom errors with `throw`.

11. **Asynchronous Basics**  
    Non-blocking code using `setTimeout`, callbacks, Promises, and `async/await`.

12. **DOM Basics**  
    Interacting with web pages: selecting elements, updating content/styles, and handling events like clicks.

## Primitive data types in JavaScript:

- **number** – Any numeric value (integers or decimals), e.g. `10`, `3.14`.  
- **string** – Text inside quotes, e.g. `"Hello"`, `'Rahim'`.  
- **boolean** – Only `true` or `false`, mainly for conditions.  
- **null** – An intentional “empty” value, meaning “nothing here”.  
- **undefined** – A declared variable that has not been given any value yet.  
- **symbol** – A special, unique, and immutable identifier, used in advanced cases.  
- **bigint** – Very large integers beyond normal number range, e.g. `12345678901234567890n`.

## JavaScript Core Concepts Checklist

### 1. Basics: syntax, variables, data types

- [ ] Statements, semicolons, comments  
- [ ] Variables: `var`, `let`, `const`  
- [ ] Primitive types: number, string, boolean, null, undefined, symbol, bigint  
- [ ] Reference types: objects, arrays, functions  

**Practice:**   
```js
// 1) Create variables for a student:
const studentName = "Afjal";
let studentAge = 23;
let isPassed = true;

// 2) Log a sentence using them:
console.log(studentName + " is " + studentAge + " years old.");
```
***

### 2. Operators & control flow

- [ ] Arithmetic: `+ - * / % **`  
- [ ] Comparison: `== === != !== > < >= <=`  
- [ ] Logical: `&& || !`  
- [ ] Ternary operator  
- [ ] `if / else if / else`, `switch`  

**Practice:**  
```js
const marks = 72;
let grade;

if (marks >= 80) {
  grade = "A+";
} else if (marks >= 70) {
  grade = "A";
} else if (marks >= 60) {
  grade = "A-";
} else {
  grade = "Below A-";
}
console.log("Grade:", grade);

// Ternary for pass/fail:
const result = marks >= 40 ? "Pass" : "Fail";
console.log("Result:", result);
```
***
### 3. Loops

- [ ] `for` loop  
- [ ] `while` loop  
- [ ] `do...while` loop  
- [ ] `break`, `continue`  

**Practice:**  
```js
// Print 1 to 10 but skip 5
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
}
```

***
### 4. Functions & scope

- [ ] Function declaration  
- [ ] Function expression  
- [ ] Arrow function  
- [ ] Parameters, return  
- [ ] Global vs function vs block scope  

**Practice:**  
```js
function add(a, b) {
  return a + b;
}

const multiply = function (a, b) {
  return a * b;
};

const square = (x) => x * x;

console.log(add(2, 3));
console.log(multiply(2, 3));
console.log(square(5));
```
***
### 5. Arrays

- [ ] Create & access items  
- [ ] `push`, `pop`, `shift`, `unshift`  
- [ ] Loop through arrays (`for`, `for...of`)  
- [ ] `map`, `filter`, `reduce` basic idea  

**Practice:**  
```js
const scores = [40, 55, 70, 90];

const passed = scores.filter(score => score >= 50);
const doubled = scores.map(score => score * 2);
const total = scores.reduce((sum, score) => sum + score, 0);

console.log("Passed:", passed);
console.log("Doubled:", doubled);
console.log("Total:", total);
```
***

### 6. Objects
- [ ] Create objects  
- [ ] Access: dot vs bracket  
- [ ] Methods (`this`)  
- [ ] Destructuring  

**Practice:**  
```js
const user = {
  name: "Rahim",
  age: 20,
  isStudent: true,
  greet() {
    console.log("Hi, I'm " + this.name);
  },
};

user.greet();

const { name, age } = user;
console.log(name, age);
```
***

### 7. Scope, hoisting, var / let / const

- [ ] `var` vs `let` vs `const` difference  
- [ ] Block scope vs function scope  
- [ ] Hoisting concept  

**Practice (just observe output):**
```js
console.log(a); // ?
var a = 5;

if (true) {
  let b = 10;
}
// console.log(b); // Uncomment to see error
```
***

### 8. Asynchronous basics

- [ ] `setTimeout`, `setInterval`  
- [ ] Promise ki  
- [ ] `async/await` basic usage  

**Practice:**  

```js
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log("Start");
  await wait(1000);
  console.log("After 1 second");
}

run();
```

***
### 9. Error handling
- [ ] `try / catch / finally`  
- [ ] `throw` diye custom error  

**Practice:**  
```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 2));
  console.log(divide(10, 0));
} catch (err) {
  console.log("Caught error:", err.message);
} finally {
  console.log("Done");
}
```

***

### 10. DOM basics (browser)

- [ ] Element select (`getElementById`, `querySelector`)  
- [ ] Text/style change  
- [ ] Event listener  

**Practice (HTML + JS):**

```html
<button id="btn">Click me</button>
<p id="text">Hello</p>

<script>
  const btn = document.getElementById("btn");
  const text = document.getElementById("text");

  btn.addEventListener("click", () => {
    text.textContent = "Button clicked!";
  });
</script>
```
***
