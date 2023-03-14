let a = document.querySelector('a');
let href = a.getAttribute('href');
let title = a.getAttribute('title');

a.setAttribute('href', 'https://yandex.ru/');
a.textContent = 'Yandex';
a.setAttribute('title', 'clock');

let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');

box1.classList.add('red');
box2.classList.add('blue');

let hasClass = box2.classList.contains('red');

if (hasClass) {
  box2.classList.remove('blue');
} else {
  box2.classList.add('blue');
}

// let div = document.getElementById('playground');
// let p = document.getElementsByClassName('text');
// let h2 = document.getElementsByTagName('h2');
// \
// console.log(p);
// console.log(div);
// console.log(h2);

// let div = document.querySelector('#playground');
// div.innerHTML = '<h2 style= "color:red;">From js !</h2>';
// console.log(div.innerHTML);

//  let p = document.querySelectorAll('.text');
//  console.log(p);

// let h2 = document.querySelector('h2');
// h2.textContent = 'Be good ,Be freezee';

// let input = document.querySelector('input');
// console.log(input.value);
