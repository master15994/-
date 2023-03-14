let str = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let new = str.concat([1,2])

let obj = [
  { name: 'Tan', age: 63 },
  { name: 'Lola', age: 233 },
  { name: 'Kiss', age: 32 },
];

let person = obj.find(function (per) {
  return per.age === 63;
});
console.log(person);

let odd = [1, 2, 3, 4, 5, 6, 7, 8].filter(function (i) {
  return i % 2 !== 0;
});
console.log(odd);

// let cars = ['BMW', 'Mersedez', 'Tesla', 'Hyaka'];

// console.log(cars[0]); // BMW
// console.log(cars.length); // 4

// cars.push('Audi');  // [ 'BMW', 'Mersedez', 'Tesla', 'Hyaka', 'Audi' ]
// console.log(cars);

// cars.pop(); // [ 'BMW', 'Mersedez', 'Tesla' ]
// console.log(cars);

// cars.shift(); //[ 'Mersedez', 'Tesla', 'Hyaka' ]
// console.log(cars);

// cars.unshift('Mazerati'); //[ 'Mazerati', 'Mersedez', 'Tesla', 'Hyaka'
// console.log(cars);

// console.log(cars.indexOf('Tesla')); // 2

// let index = cars.indexOf('Hyaka');
// let hyaka = cars[index];

// console.log(hyaka);
