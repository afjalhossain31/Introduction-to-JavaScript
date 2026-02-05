//Your task is to calculate the total budget required to buy electronics: 

function calculateElectronicsBudget(laptops, tablets, mobiles){
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;

  const totalBudget =(laptops * laptopPrice) + (tablets * tabletPrice) + (mobiles * mobilePrice);
   return totalBudget;
}

const totalBudget = calculateElectronicsBudget(2,5,7);
console.log("Total Budget:",totalBudget);
