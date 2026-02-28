// Inch to Feet 12 inch = 1 feet
function inchToFeet(inch) {
  return inch / 12;
}

function inchToFeet(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;

    const result = feetNumber + ' ft ' + inchRemaining + ' in';
    return result;
}

console.log(inchToFeet(25)); // Output: "2 ft 1 in"

// Miles to Kilometer
function milesToKilometer(miles) {
  const kilo = miles * 1.60934;
  return kilo;
}

let inches = 24;
let miles = 5;

console.log(inches + " inches = " + inchToFeet(inches) + " feet");
console.log(miles + " miles = " + milesToKilometer(miles) + " kilometers");
