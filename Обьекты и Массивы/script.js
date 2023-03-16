let ford = Object.create(
  // Object - глобальный обьект; create - метод

  // Первый Параметр - create
  {
    calculateDistancePerYear: function () {
      // высчитываем сколько машина проезжает за год
      Object.defineProperty(this, 'distancePerYear', {
        //1. this - обьект , 2. название , 3. создаем обьект
        value: Math.ceil(this.distance / this.age), // math.ceil - округляет число до целого
        enumerable: true,
        writable: false,
        configurable: false,
      });
    },
  },

  //Второй Параметр - create
  {
    name: {
      value: 'Ford',
      enumerable: true, // позволяет открыть область видимости для опред. свойств и будет дост. для перечесление
      writable: false, // св-во может быть изменино если значение true (по умол. знач false), нельзя поменять 'Ford'
      configurable: false, // мы можем удалять или изменять ключи из обьекта если знач true (по умол. знач false)
    },
    model: {
      value: 'Focus',
      enumerable: true,
      writable: false,
      configurable: false,
    },
    year: {
      value: 1997,
      enumerable: true,
      writable: false,
      configurable: false,
    },
    distance: {
      value: 144888,
      enumerable: true,
      writable: true,
      configurable: false,
    },

    age: {
      // высчитываем возраст машины
      enumerable: true,
      get: function () {
        console.log('Получаем возраст');
        return new Date().getFullYear() - this.year; //создаем новый обект(new Date)-вызываем метод(текущий год ) - значение
      },
      set: function () {
        console.log('Устанавливаем значение ');
      },
    },
  }
);

console.log(ford);

for (let key in ford) {
  // получаем ключи нашего обьекта
  console.log(key);
}
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
