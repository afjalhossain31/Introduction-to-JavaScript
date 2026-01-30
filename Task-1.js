// Write a JavaScript code to reverse the array colors without using the reverse method.


let colors=['red', 'blue', 'green', 'yellow', 'orange'];
console.log(colors);

// const ColorsReversed= colors.reverse();
// console.log(ColorsReversed);  but  do not use reverse method 


let Reverse_rev=[];

for(let i=colors.length-1; i>=0; i--){
    Reverse_rev.push(colors[i]);
}
console.log(Reverse_rev);



// Task -4 Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person But I love to relax';

let words = statement.split(' ');
// console.log(words);

let reversedWords= [];

for (let i = words.length - 1; i >= 0; i--) {
    reversedWords.push(words[i]);
}

let reversedStatement = reversedWords.join(' ');
console.log(reversedStatement);