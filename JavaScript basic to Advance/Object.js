// create an object
const user = {
  name: "Esha Rahman",
  age: 20,
  email: "esha12@gmail.com"
};

console.log(user.name);
console.log(user["age"]);
// update object property
user.city = "Dhaka";
user.age = 21;

console.log(user);

//another object with method
const person = {
  firstName: "mehedi",
  lastName: "Hasan",
  fullName() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName());
