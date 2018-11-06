'use strict';

var products = [];
var images = [];

console.log(products);
console.log(images);
var totalClicks = 0;

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.voteCounter = 0;

  products.push(this);
  images.push(this.src);
}

new Product('bag', 'assets/bag.jpg');
new Product('banana', 'assets/banana.jpg');
new Product('bathroom', 'assets/bathroom.jpg');
new Product('boots', 'assets/boots.jpg');
new Product('breakfast', 'assets/breakfast.jpg');
new Product('bubblegum', 'assets/bubblegum.jpg');
new Product('chair', 'assets/chair.jpg');
new Product('cthulhu', 'assets/cthulhu.jpg');
new Product('dog-duck', 'assets/dog-duck.jpg');
new Product('dragon', 'assets/dragon.jpg');
new Product('pen', 'assets/pen.jpg');
new Product('pet-sweep', 'assets/pet-sweep.jpg');
new Product('scissors', 'assets/scissors.jpg');
new Product('shark', 'assets/shark.jpg');
new Product('sweep', 'assets/sweep.png');
new Product('tauntaun', 'assets/tauntaun.jpg');
new Product('unicorn', 'assets/unicorn.jpg');
new Product('usb', 'assets/usb.gif');
new Product('water-can', 'assets/water-can.jpg');
new Product('wine-glass', 'assets/wine-glass.jpg');

function shuffle() {
  var i = 0;
  var j = 0;
  var temp = null;

  for (i = images.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = images[i];
    images[i] = images[j];
    images[j] = temp;
  }
}
//shuffle();

function displayPics() {
  var main = document.getElementById('container');
  var imgOne = document.createElement('img');
  imgOne.setAttribute('src', images[10]);
  main.appendChild(imgOne);
  imgOne.className = 'one';

  var imgTwo = document.createElement('img');
  imgTwo.setAttribute('src', images[5]);
  main.appendChild(imgTwo);
  imgTwo.className = 'one';

  var imgThree = document.createElement('img');
  imgThree.setAttribute('src', images[15]);
  main.appendChild(imgThree);
  imgThree.class = 'one';
}
displayPics();

var turns = 0;

document.getElementsByClassName('one').addEventListener('click', function(event) {
  event.preventDefault();
  for (var i = 0; i < 24; i++) {
    this.votecounter++;
    totalClicks++;
    turns++;
    shuffle();
    if (turns === 24) {
      document.getElementsByClassName('one').removeEventListener('click');
      // document.getElementById('two').removeEventListener('click');
      // document.getElementById('three').removeEventListener('click');
    }
  }
});
// document.getElementById('two').addEventListener('click', function() {
//   //event.preventDefault();
//   for (var i = 0; i < 24; i++) {
//     this.votecounter++;
//     totalClicks++;
//     turns++;
//     shuffle();
//   }
// });
// document.getElementById('three').addEventListener('click', function() {
//   //event.preventDefault();
//   for (var i = 0; i < 24; i++) {
//     this.votecounter++;
//     totalClicks++;
//     turns++;
//     shuffle();
//   }
// });



