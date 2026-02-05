/** 
 * Find the lowest number in the array below.
*/

const heights2 = [167, 190, 120, 165, 137];

// const lowestHeight = Math.min(...heights2);
// Math.min() dewate sob ghola number theke sobcheye choto number ta ber kore.
// console.log(lowestHeight);

let lowest = heights2[0];
// heighta2.length loop cholbe jotokon array sesh na hoy
for (let i=1; i<heights2.length; i++) {
    if (heights2[i] <lowest){
        lowest = heights2[i];
    }
}
console.log(`Lowest Number : ${lowest}`);


// Task-2: Find the friend with the smallest name.
const heights1 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

let smallestName = heights1[0];

for( let i=1 ; i<heights1.length; i++){
    if (heights1[i].length < smallestName.length){
        smallestName = heights1[i];
    }
}

console.log(`Friend with the smallest Name : ${smallestName}`);
