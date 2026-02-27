
const king = { name: 'Afjal', age: 25, kingdom: 'Pride Lands' };
// Object.freeze(king);
console.log(king);
Object.seal(king);
delete king.age;
delete king.kingdom;
king.queen = 'Toshi';
king.name = 'King Afjal';
console.log(king);