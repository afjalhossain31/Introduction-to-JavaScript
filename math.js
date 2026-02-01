/*
Math.abs(-15) → 15
Math.round(4.6) → 5
Math.ceil(4.1) → 5
Math.floor(4.9) → 4
Math.random() → 0 থেকে 1 এর মধ্যে
Random (1-10) → 1 থেকে 10 এর মধ্যে
*/

const numbers = [-15, 4.6, 4.1, 4.9]; // abs, round, ceil, floor

console.log("Using for loop:");

for (let i = 0; i < numbers.length; i++) {
    let n = numbers[i];

    console.log(`\nNumber: ${n}`);

    // Absolute value
    console.log("Absolute:", Math.abs(n));

    // Round to nearest integer
    console.log("Round:", Math.round(n));

    // Ceil → next integer
    console.log("Ceil:", Math.ceil(n));

    // Floor → lower integer
    console.log("Floor:", Math.floor(n));
}


for (let i = 0; i < 5; i++) {

    let rand = Math.random();
    console.log(`Random (0-1) #${i+1}:`, rand);

    let rand1to10 = Math.floor(Math.random() * 10) + 1;
    console.log(`Random (1-3) #${i+1}:`, rand1to10);
}


