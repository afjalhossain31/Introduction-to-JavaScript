// Write a JavaScript code to get the even numbers from an array using any looping technique.

const  numbers = [12, 98, 5, 41, 23, 78, 46];

let EvenNumbers = [];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 === 0) { 
        EvenNumbers.push(numbers[i]);
    }
}

console.log(EvenNumbers);


