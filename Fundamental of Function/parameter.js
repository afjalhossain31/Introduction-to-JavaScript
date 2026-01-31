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