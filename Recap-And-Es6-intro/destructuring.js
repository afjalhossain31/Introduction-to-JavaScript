// const product = {
//     name: 'iPhone 14 Pro Max',
//     price: 1099,
//     color: 'Deep Purple',
//     description : ' A Smartphone by apple'
// };

// const newPrice = product.price+ 100;
// const phoneName = `this is ${product.name}`;

// const price = product.price;
// const name = product.name;

const price = 5555; // ekhadik price name thaka jabena. jar jonno price : phone Price set korlam.

// const product = { name: 'iPhone', price: 799, brand: 'Apple' };

const {name, price: phonePrice, camera = '12MP'} = { name: 'iPhone', price: 799, brand: 'Apple', camera: '48MP' };
console.log(name, phonePrice, camera);
console.log(camera);
console.log(phonePrice);

const [first, second]  = [10, 20, 30, 50];
console.log(first, second);

const [height, weight] = [170, 65];