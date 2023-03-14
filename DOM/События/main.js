let divs = document.querySelectorAll('div');
let link = document.querySelector('a');

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', function (event) {
    event.stopPropagation();
    console.log(this.getAttribute('id'));
  });
}

link.addEventListener('click', handleLinkClick);

function handleLinkClick(event) {
  event.preventDefault();

  let div = divs[0];
  // if (div.style.display === 'none') {
  //   div.style.display = 'flex';
  // } else {
  //   div.style.display = 'none';
  // }
  div.style.display = div.style.display === 'none' ? 'flex' : 'none';
}

// let button = document.querySelector('button');\
// let h1 = document.querySelector('h1');
// let input = document.querySelector('input');

// function buttonHand() {
//   h1.textContent = input.value;
// }
// button.addEventListener('click', buttonHand);

// h1.addEventListener('mouseenter', function () {
//   this.style.color = 'red';
//   this.style.backgroundColor = 'grey';
// });
// h1.addEventListener('mouseleave', function () {
//   this.style.color = 'black';
//   this.style.backgroundColor = 'white';
// });
