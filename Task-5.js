// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

let originalValues =[10, 20, 30, 40, 50];

let copiedValues = [];

for(let i=0; i<originalValues.length; i++){
    copiedValues.push(originalValues[i]);
}

copiedValues[0] =99 ;
copiedValues[1] =99 ; // index 1 changed to 99
copiedValues[2] =99 ;
copiedValues[3] =99 ; // index 3 changed to 99

console.log("Original Values :", originalValues);
console.log("Copied Values :", copiedValues);


//task -6 Given an array of student objects, print each student’s name and marks.


let students = [
  { name: "Afjal", marks: 85 },
  { name: "Hossain", marks: 90 }
];

// create object function 

for (let i = 0; i < students.length; i++) {
  console.log(`${students[i].name} Scored ${students[i].marks}`);
}

//Task -7 Given a 2D array, update the value at second row first item to 99 and print the updated array.

let twoDArray = [
  [1, 2],
  [3, 4],
  [5, 6]
]

/*
 1. i= starts at 0 
 2. twoArray.length= number of rows
 3. i is smaller than that  i++ increase the row index each time
4. j= starts at 0
5. twoDArray[i].length = how many items are in that row
6. j++ moves  to the next column 
7. i===1 are we in 2nd position ? row index 1 → second row /j===0 and and first column/  column index 0 → first item

*/

for (let i = 0; i < twoDArray.length; i++) {
  for (let j = 0; j < twoDArray[i].length; j++) {

    if (i === 1 && j === 0) {
      twoDArray[i][j] = 99;  //if the condition is true thn replace the value with 99
    }

  }
}

console.log( "Expected Array ",twoDArray); 