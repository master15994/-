let currentYear = 2023;
let carName = 'Ford';
let carYear = 2019;
let carAge = currentYear - carYear;

//*   ------------------- Условные Операторы --------------------
// если в.м меньше 5 лет....
//если в.м больше или равно 5 лет и меньше или равно 10 лет....
//иначе другое сообщение ....

// if (carAge < 5) {
//   console.log(carName + 'младше 5 лет');
// } else if (carAge >= 5 && carAge <= 10) {
//   console.log(
//     carName + ' больше и равен 5 годам или меньше или равен 10 годам'
//   );
// } else {
//   console.log('возраст' + carName + ' равняется' + carAge + 'годам');
// }

// 0 , null , underfined , '' , NaN

let cut = 'hello';

// if (cut) {
//   console.log('значение true');
// } else {
//   console.log('значение false');
// }

// cut ? console.log('значение true') : console.log('значение false');

//*   ----------------- Тернарные Операторы --------------------
// if (4) {
//   console.log('значение true');
// } else {
//   console.log('значение false');
// }

// * 4 ? console.log('значение true') : console.log('значение false');

// let personAge = 22;

// let message;

// if (personAge < 18) {
//   message = 'подросток';
// } else {
//   message = 'совершеннолетний';
// }
//* let message = personAge < 18
// ? 'подросток'
// * : 'совершеннолетний';

// console.log(message);

//*   ----------------- Операторы Switch Case--------------------

// let carColor = 'green';

// if (carColor === 'green') {
//   console.log('зеленый');
// } else if (carColor === 'yellow') {
//   console.log('желтый');
// } else if (carColor === 'red') {
//   console.log('красный');
// } else {
//   console.log('не определен');
// }

let carColor = 'red';
switch (carColor) {
  case 'green':
    console.log('зеленый');
    break;
  case 'yellow':
    console.log('желтый');
    break;
  case 'red':
    console.log('красный');
    break;
  default:
    console.log('не определен');
}
