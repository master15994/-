let cars = ['BMW', 'Mersedez', 'Tesla', 'Hyaka'];

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

let index = cars.indexOf('Hyaka');
let hyaka = cars[index];

console.log(hyaka);
