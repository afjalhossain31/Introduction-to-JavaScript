/**
 * array has some duplicate elements
 * []
 */

const binarykor = ['Afjal', 'Babul', 'Cabul', 'Dabul', 'Ebul', 'Babul', 'Cabul', 'Dabul'];
const number = [10, 20, 30, 10, 40, 50, 20, 60];

function noDuplicate(array) {
    const uniqueArray = []; 

    for (const item of array) {
        if (uniqueArray.includes(item) === false) {
            uniqueArray.push(item);
        }
    }

    return uniqueArray;
}

const uniqueNames = noDuplicate(binarykor);
console.log("Array without duplicate elements:", uniqueNames);

const uniqueNumbers = noDuplicate(number);
console.log("Numbers without duplicate elements:", uniqueNumbers);
