
function findAveragePhonePrice(phones){
    let totalPrice = 0;

    for (let i=0; i<phones.length; i++){
        totalPrice += phones[i].price;
    }

    return totalPrice / phones.length;
}

/**
 function findAveragePhonePriceByBrand(phones, brandName) {
  let totalPrice = 0;
  let count = 0;

  for (let i = 0; i < phones.length; i++) {
    if (phones[i].brand === brandName) {
      totalPrice += phones[i].price;
      count++;
    }
  }

  if (count === 0) {
    return 0;
  }

  return totalPrice / count;
}
 */


const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

const averagePrice = findAveragePhonePrice(phones);
console.log("Average price of Phones:", averagePrice);


// const averagePrice = findAveragePhonePriceByBrand(phones, "Oppo");
// console.log(" brand: ", averagePrice);