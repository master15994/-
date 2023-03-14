let person = {
  name: 'San',
  year: 1991,
  jobs: 'Lawyer',

  family: ['Hirosima', 'Lord'],

  car: {
    year: 1771,
    model: 'Ferrari',
  },
};

console.log(JSON.stringify(person));

//   calculate: function () {
//     let age = 2023 - this.year;
//     console.log(age);
//   },
// };

// person.calculate(); // 32

// console.log(person.year);
// console.log(person.family);

// let field = 'car';
// console.log(person[field].year); //1771

// person.year = 1888;
// console.log(person);
