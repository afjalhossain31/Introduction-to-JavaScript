
const number= [1, 2, 3, 4, 5];

number.reverse();
console.log(number);

// const reversed= number.reverse();
// console.log(reversed);

const rev_num= [10, 20, 30, 40, 50, 60, 70];

for(const num of number.reverse()){
    console.log(num);
    // rev_num.push(num); 
    rev_num.unshift(num); // unshift diye reverse kora jay age age bose 
}
console.log(rev_num);

const reversed_number=[];
for(let i=0; i<number.length; i++){
    const num= number[i];
    reversed_number.unshift(num);
}
console.log(reversed_number);