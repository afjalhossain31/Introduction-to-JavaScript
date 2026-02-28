// 1. for loop 
// 2. while loop
// 3. do while loop -->ignore this
// for of-->array loop korar jonno
// for in --> object loop korar jonno

const friends1=["Elon", "bill", "mark", "waren"];

for (const friends of friends1){
    console.log(friends);
}

// for in loop example
const num=[5, 10, 456, 421, 25 ,4525, 5412, 45 ,41, 5];

for(let i=0; i<num.length; i++){
    console.log(num[i]);
}

//while diye ekta example
const friends = ["rahim", "karim", "jamal", "salim", "halim"];
let j=0;

while(j<friends.length){
    console.log(friends[j]);
    j++;
}

let n=0;
 while(n < num.length){
    console.log(num[n]);
    n++;

 }