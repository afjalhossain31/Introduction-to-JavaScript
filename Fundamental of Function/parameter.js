function square (number){
    // console.log(number * number);
    // console.log(Math.pow(number,2));
    console.log(number ** 2);
}
// console.log(5 ** 2);
square(6);

function add(num1 ,num2 ){
    sum = num1 + num2;
    console.log(sum);
}
add(10,15);
add(20,25);
add(30,35);

function multiple(a,b,c,d,e){
    const total = a+ b + c + d + e;
    console.log(total);
    const multify = a * b * c * d * e;
    console.log(multify);
}

multiple(1,9,3,9,5);
multiple(2,4,6,8,10);

// function parameter vs argument

function doubleIt(number){
    const doubled = number *2;
    console.log(doubled);
}

console.log("calling doubleIt function");
doubleIt(15);
console.log('----------------------');
doubleIt(50);
console.log('----------------------');
doubleIt(100);

const xyz= 25;
doubleIt(xyz);

function difference(num1, num2){
    const diff = num1 - num2;
    console.log(diff);
}
console.log('----------------------');
const myAge =24;
const yourAge =30;

difference(yourAge, myAge);

// Function return and set retrun value to a variables

function TenTime(number1){
    const result = number1 * 10;
    return result;
}

function cutHalf(number2){
    const half = number2 / 2;
    return half;
}

//create variables to store the return values / create objects
const first = TenTime(15);
console.log(first);
const second = cutHalf(50);
console.log(second);
console.log('----------------------');



// Odd and Even
function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    return false;
}

console.log(isEven(110));
console.log(isEven(67));

// Odd number
function isOdd(number){
    if(number % 2 !== 0){
        return true;
    }
    return false;
}
console.log('----------------------');
console.log(isOdd(10));
console.log(isOdd(7));