// push

const age=[20,21,22,23];

// console.log(age);

age.push(100);
age.push(200);
age.push(300);
console.log(age);

//pop 
age.pop();
age.pop();

console.log(age);

age.splice(0, 1);
console.log(age);

age.splice(0, 3);
console.log(age);

// specific index remove korte chaile 
// age.splice(1,2);
// console.log(age);

let friends=["afjal","hossain","emon","rakib","sabbir"];
console.log(friends);

friends.pop();
console.log(friends);

//added new friend 
let addfriend=friends.push("Abdullah");
let addfriend1=friends.push("Mehedi");
console.log(friends);

//shift  first element remove 

friends.shift();
console.log(friends);

//added new friend at the first position
friends.unshift("Afjal");
console.log(friends);

