let a = [1, 2, 4];
let b = [5, 'Hello', 6];

Array.prototype.double = function () {
  let newArray = this.map(function (item) {
    if (typeof item === 'number') {
      return (item *= item);
    }
  });

  if (typeof item === 'string') {
    return (item += item);
  }
  return newArray;
};

let newA = a.double();
let newB = b.double();

console.log('A', newA);
console.log('B', newB);

// * Привязка Контекст

// function printObject(objName) {
//   console.log('Printing Object', objName);
//   for (let key in this) {
//     if (this.hasOwnProperty(key)) {
//       console.log('[' + key + ']', this[key]);
//     }
//   }
// }

// let person = {
//   firstName: 'Pulatov',
//   job: 'teacher',
//   age: 31,
//   friends: ['Elena', 'Igor'],
// };
// let car = {
//   name: 'Ford',
//   model: 'Focus',
//   year: 2018,
// };

// let printPerson = printObject.bind(person);
// printPerson('Person');

// printObject.call(car, 'Car');

// printObject.apply(person, ['Person']);

//  * Контекст

// let person = {
//   age: 28,
//   name: 'Max',
//   job: 'Frontend',

//   displayInfo: function (ms) {
//     let self = this;
//     setTimeout(function () {
//       console.log('Name:', self.name);
//       console.log('Job:', self.job);
//       console.log('Age:', self.age);
//     }, ms);
//   },
// };

// person.displayInfo(500);

//  *Замыкание
// let createCounter = function (counterName) {
//   let counter = 0;

//   return {
//     increment: function () {
//       counter++;
//     },
//     decrement: function () {
//       counter--;
//     },
//     getCounter: function () {
//       return counter;
//     },
//   };
// };

// let counterA = createCounter('Countert A');
// let counterB = createCounter('Countert B');

// counterA.increment();
// counterA.increment();
// counterA.increment();

// counterB.increment();
// counterB.increment();
// counterB.increment();

// * Получаем ключ от обьекта
// let person = {
//   name: 'Max',
//   age: 24,
//   job: 'Frontend',
// };

// Object.keys(person).forEach(function(key) {   // первый метод получение ключа
//   console.log(person[key]);
// })

// let keys = Object.keys(person); //
// console.log(keys);

// for (let key in person) {        // второй метод получение ключа
//   console.log(person[key]);
// }

// let ford = Object.create(
//   Object - глобальный обьект; create - метод

//   Первый Параметр - create
//   {
//     calculateDistancePerYear: function () {
//       // высчитываем сколько машина проезжает за год
//       Object.defineProperty(this, 'distancePerYear', {
//         //1. this - обьект , 2. название , 3. создаем обьект
//         value: Math.ceil(this.distance / this.age), // math.ceil - округляет число до целого
//         enumerable: true,
//         writable: false,
//         configurable: false,
//       });
//     },
//   },

//   //Второй Параметр - create
//   {
//     name: {
//       value: 'Ford',
//       enumerable: true, // позволяет открыть область видимости для опред. свойств и будет дост. для перечесление
//       writable: false, // св-во может быть изменино если значение true (по умол. знач false), нельзя поменять 'Ford'
//       configurable: false, // мы можем удалять или изменять ключи из обьекта если знач true (по умол. знач false)
//     },
//     model: {
//       value: 'Focus',
//       enumerable: true,
//       writable: false,
//       configurable: false,
//     },
//     year: {
//       value: 1997,
//       enumerable: true,
//       writable: false,
//       configurable: false,
//     },
//     distance: {
//       value: 144888,
//       enumerable: true,
//       writable: true,
//       configurable: false,
//     },

//     age: {
//       // высчитываем возраст машины
//       enumerable: true,
//       get: function () {
//         console.log('Получаем возраст');
//         return new Date().getFullYear() - this.year; //создаем новый обект(new Date)-вызываем метод(текущий год ) - значение
//       },
//       set: function () {
//         console.log('Устанавливаем значение ');
//       },
//     },
//   }
// );

// console.log(ford);

// for (let key in ford) {
//   // получаем ключи нашего обьекта
//   console.log(key);
// }
// function Car(name, year) {
//   this.name = name;
//   this.year = year;
// }

// Car.prototype.color = 'orange';
// Car.prototype.getAge = function () {
//   return new Date().getFullYear() - this.year;
// };

// let ford = new Car('Ford', 2012);
// let bwm = new Car('BWM', 2020);
// ford.color = 'red';
// console.log(ford);
// console.log(bwm);
