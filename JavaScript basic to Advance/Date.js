const now = new Date();
console.log("Current Date & Time:", now);
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1);
console.log("Date:", now.getDate());
console.log("Day:", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());

const myBirthday = new Date("2000-05-15");
console.log("My Birthday:", myBirthday);

console.log("Timestamp:", now.getTime());

console.log("Date String:", now.toDateString());
console.log("Time String:", now.toTimeString());
console.log("Locale String:", now.toLocaleString());

const future = new Date("2026-12-31");
const diffTime = future - now;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
console.log(`Days left until 31 Dec 2026: ${diffDays}`);
