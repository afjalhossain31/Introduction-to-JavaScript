//Javascript er sort ache but valo vabe kaj korena ,etake korte ekta function use korte hoi 
// String sort --> Alphabetical order sort hoi 
const persons= ['Afjal ', 'Babu', 'Akib', 'esha', 'Prionty'];
const sortedpersons= persons.sort();
console.log(sortedpersons);

// sort -->
const numbers= [5, 9, 1200, 400, 3000,1 ];

/*
1. Ascending Order --> smallest to largest
2. Descending Order --> largest to smallest
 */

// const numbers_asc= numbers.sort();
const numbers_asc= numbers.sort(function(a,b){
    return a-b;
});

// const numbers_asc= [...numbers].sort(function(a,b){
//     return a-b;
// });
console.log(numbers_asc);

// const numbers_desc= numbers.sort(); 
const numbers_desc= numbers.sort(function(a,b){
    return b-a;
});
// const numbers_desc= [...numbers].sort(function(a,b){
//     return b-a;
// });
console.log(numbers_desc);
