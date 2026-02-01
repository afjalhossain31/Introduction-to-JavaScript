// year will be leap year if it is divisible by 4
// but not divisible by 100, unless it is also divisible by 400


function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "Leap Year";
  } else {
    return "Not a Leap Year";
  }
}


let year = 2024;
console.log(year + " is " + isLeapYear(year));
