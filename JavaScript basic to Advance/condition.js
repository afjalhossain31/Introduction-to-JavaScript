let result =3.5;

if(result == 5.0){
    console.log("baba tomake ami bike kine dibo");
}else if(result >= 3.5){
    console.log("tomake ami laptop kine dibo");
}else{
    console.log("tomake ami kichu dibo na");
}

// Problem 1. Delivery Charge: Order amount যদি amount ≥ 1000 হয় → “Free Delivery”, না হলে → “Delivery Charge = 80”

let orderAmount = 1500;

if (orderAmount >= 1000) {
  console.log("Free Delivery");
} else {
  console.log("Delivery charge 80");
}

// // Problem 2. ATM Withdraw: যদি withdraw amount ≤ balance amount হয়
//  যদি withdraw amount % 500 == 0 হয় → “Withdraw Successful”
//না হলে → “Enter amount multiple of 500”
//না হলে → “Insufficient Balance”

let balance= 2000;
let withdrawAmount= 1600;

//if else ladder bole
if(withdrawAmount <= balance){
    if(withdrawAmount % 500 == 0){
        console.log("Withdraw Successful");
    } else {
        console.log("Enter amount multiple of 500");
    }
} else {
    console.log("Insufficient Balance");
}

//Ternary operator
let isMatured= true;
let isMarried = isMatured
    ? console.log("You are married") 
    : console.log("You are not married");