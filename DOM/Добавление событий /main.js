let button = document.querySelector('button');
let h1 = document.querySelector('h1');
let input = document.querySelector('input');

function buttonHand() {
  h1.textContent = input.value;
}
button.addEventListener('click', buttonHand);

h1.addEventListener('mouseenter', function () {
  this.style.color = 'red';
  this.style.backgroundColor = 'grey';
});
h1.addEventListener('mouseleave', function () {
  this.style.color = 'black';
  this.style.backgroundColor = 'white';
});
