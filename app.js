'use strict';


var images = [];

console.log(images);

var totalClick = 0;

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.voteCounter = 0;
  console.log(this.voteCounter);
  images.push(this);
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

function shuff() {
  var i = 0;
  var j = 0;
  var temp = null;
  totalClick++;
  console.log('clicks', totalClick);

  for (i = images.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = images[i];
    images[i] = images[j];
    images[j] = temp;
  }
  if (totalClick === 25) {
    document.getElementById('imgone').removeEventListener('click', shuff);
    document.getElementById('imgtwo').removeEventListener('click', shuff);
    document.getElementById('imgthree').removeEventListener('click', shuff);
  }
  displayPics();
}

shuff();

function displayPics() {
  var main = document.getElementById('container');
  var imgOne = document.getElementById('imgone');
  imgOne.setAttribute('src', images[0].src);
  main.appendChild(imgOne);

  var imgTwo = document.getElementById('imgtwo');
  imgTwo.setAttribute('src', images[1].src);
  main.appendChild(imgTwo);

  var imgThree = document.getElementById('imgthree');
  imgThree.setAttribute('src', images[2].src);
  main.appendChild(imgThree);
}


document.getElementById('imgone').addEventListener('click', shuff);
document.getElementById('imgtwo').addEventListener('click', shuff);
document.getElementById('imgthree').addEventListener('click', shuff);

document.getElementById('imgone').addEventListener('click', function() {
  var element = document.getElementById('imgone');
  if (element) element.innerHTML =this.voteCounter++;

});

document.getElementById('imgtwo').addEventListener('click', function() {
  var element = document.getElementById('imgtwo');
  if (element) element.innerHTML =this.voteCounter++;
});

document.getElementById('imgthree').addEventListener('click', function() {
  var element = document.getElementById('imgtwo');
  if (element) element.innerHTML =this.voteCounter++;
});
