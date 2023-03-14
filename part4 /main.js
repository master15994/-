document.querySelector('button').addEventListener('click', function () {
  let value = document.querySelector('input').value;

  localStorage.setItem('headerText', value);
});

document.addEventListener('DOMContentLoaded', function () {
  let text = localStorage.getItem('headerText');

  if (text && text.trim()) {
    document.querySelector('h1').textContent = text;
  }
});

// document.querySelector('#alert').addEventListener('click', function () {
//   alert('Вы успешно кликнули по кнопке!');
// });

// document.querySelector('#confirm').addEventListener('click', function () {
//   let desecion = confirm('Вы уверены что хотите нажать на кнопку?');
//   if (desecion) {
//     alert('Вы успешно кликнули по кнопке!');
//   }
// });

// document.querySelector('#prompt').addEventListener('click', function () {
//   let age = prompt('Введите свой возраст', 18);

//   if (age >= 18) {
//     alert('Проходите .... ну ');
//   } else {
//     alert('Малолетка еще ');
//   }
// });

// console.warn('Запрщено!!');
// console.info('Внимание!!');
// console.err('Ошибка!');
