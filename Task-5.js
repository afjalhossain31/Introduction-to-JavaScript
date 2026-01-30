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



