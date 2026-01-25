const friend =["afjal","hossain","emon","rakib","sabbir"];


console.log(friend.includes('afjal'));
console.log(friend.includes('Afjal'));

if(friend.includes('emon')){ 
    console.log("party");
}else{
    console.log("no party");
}

//index dot js

console.log(friend.indexOf('rakib'));
console.log(friend.indexOf('afjal'));


const nums=[];

const food= 'ros o gol l a';

console.log(Array.isArray(friend));
console.log(Array.isArray(nums));
console.log(Array.isArray(food));

//index Of ()
const array= [2,8,9];
console.log(array.indexOf(2));
console.log(array.indexOf(18));

