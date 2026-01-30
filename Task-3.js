// Use a for...of loop to concatenate all the elements of an array into a single string.


var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

let concatenatedString = '';

for (let name of numbers) {
    concatenatedString += name; //concatenation = concatenation + name
}
console.log(concatenatedString);
