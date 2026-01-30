// Write a JavaScript code to reverse the array colors without using the reverse method.

let colors=['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
console.log(colors);
// const ColorsReversed= colors.reverse();
// console.log(ColorsReversed);  but  do not use reverse method 


let Reverse_rev=[];

for(let i=colors.length-1; i>=0; i--){
    Reverse_rev.push(colors[i]);
}
console.log(Reverse_rev);