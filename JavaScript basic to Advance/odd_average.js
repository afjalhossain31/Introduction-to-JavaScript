/**
    function takes an array as parameter
    give me the average of the odd number in the array
 */

/**
 
function oddAverage(number){
console.log(number);
}

const number= [10,23,45,66,79,88,91];
const avg = oddAverage(number);
console.log("Average of odd numbers is:", avg);

 */



function averageOfOddNumbers(arr) {
    let sum = 0;
    let count = 0;

    for (let num of arr) {
        if (num % 2 !== 0) {
            sum += num;
            count++;
        }
    }

    return count === 0 ? 0 : sum / count;
}

let numbers = [42, 13, 58, 65, 81];
console.log("Average of odd numbers:", averageOfOddNumbers(numbers));
