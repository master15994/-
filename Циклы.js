let numbers = [1, 3, 4, '67', '8', 9, 6, 4, 34];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     // четные числа
//     console.log(numbers[i]);
//   }
// }

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     continue;
//   }
//   console.log(numbers[i]);
// }

numbers.push('string');
for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === 'string') {
    continue;
  }
  console.log(numbers[i]);
}

// console.log(numbers[0]); // 1
// console.log(numbers[3]); // 67

// numbers.push('not a numbers');
// numbers.push(33);
// numbers.unshift(1111);
