let carName = 'Nexia';
let carYear = 2018;
let personYear = 1990;

function calculateAge(year) {
  let currentYear = 2022;
  let result = currentYear - year;
  return result;
}
function chechLog(year, name, compareTo) {
  if (calculateAge(year) < compareTo) {
    console.log('Возраст ' + name + 'меньше ' + compareTo + ' лет');
  } else {
    console.log('Возраст ' + name + 'больше ' + compareTo + ' лет');
  }
}
chechLog(carYear, 'машины ', 8);
chechLog(personYear, 'человека ', 20);

// if (calculateAge(carYear) < 10) {
//   console.log('меньше 10 лет');
// } else {
//   console.log('больше 10 лет');
// }

// if (calculateAge(personYear) < 10) {
//   console.log('меньше 10 лет');
// } else {
//   console.log('больше 10 лет');
// }

// if (2022 - carYear < 10) {
//   console.log('меньше 10 лет');
// } else {
//   console.log('больше 10 лет');
// }

// if (2022 - personYear < 10) {
//   console.log('меньше 10 лет');
// } else {
//   console.log('больше 10 лет');
// }
