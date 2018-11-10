'use strict';
var label = [];
console.log(label);
var images = [];
console.log(images);
var chartData = [];
var totalClick = 0;
chartData.push(Product.voteCounter);
console.log(chartData);
var ctx = document.getElementById("myChart").getContext('2d');

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.voteCounter = 0;
  this.totalViews = 0;
  images.push(this);
  label.push(this.name);
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
  displayPics();
  if (totalClick === 25) {
    document.getElementById(images[0].name).removeEventListener('click', shuff);
    document.getElementById(images[1].name).removeEventListener('click', shuff);
    document.getElementById(images[2].name).removeEventListener('click', shuff);

    document
      .getElementById(images[0].name)
      .removeEventListener('click', countClicks);
    document
      .getElementById(images[1].name)
      .removeEventListener('click', countClicks2);
    document
      .getElementById(images[2].name)
      .removeEventListener('click', countClicks3);
  }

  function renderChart() {
    for (var i = 0; i < images.length; i++) {
      chartData.push(images[i].voteCounter);
    }
    var jsonData = JSON.stringify(chartData);
    localStorage.setItem('voteData', jsonData);
    var chartConfig = {
      type: 'bar',
      data: {
        labels: label,
        datasets: [{
          label: '# of Votes',
          data: chartData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    };
    var myChart = new Chart(ctx, chartConfig);
    
    if(localStorage.getItem('voteData')) {
      var voteData = localStorage.getItem('voteData');
      myChart.data.datasets[0].chartData = JSON.parse(voteData);
    
      myChart.update();
    }
   
    document.getElementById('butt').removeEventListener('click', renderChart);
    var changeButton = document.getElementById('butt');
    changeButton.textContent = 'Do Again';
    changeButton.addEventListener('click', function reload() {
      location.reload();
    });
  }
  function makeButton() {
    if (totalClick === 25) {
      var container = document.getElementById('make');
      var button = document.createElement('button');
      button.id = 'butt';
      button.textContent = 'show Results';
      container.appendChild(button);
      document.getElementById('butt').addEventListener('click', renderChart);
    }
  }
 
  makeButton();
  
}

shuff();

function displayPics() {
  var imgOne = document.getElementsByClassName('one')[0];
  imgOne.setAttribute('src', images[0].src);
  imgOne.id = images[0].name;
  images[0].totalViews++;

  var imgtw = document.getElementsByClassName('two')[0];
  imgtw.setAttribute('src', images[1].src);
  imgtw.id = images[1].name;
  images[1].totalViews++;

  var imgThree = document.getElementsByClassName('three')[0];
  imgThree.setAttribute('src', images[2].src);
  imgThree.id = images[2].name;
  images[2].totalViews++;
}

document.getElementById(images[0].name).addEventListener('click', shuff);
document.getElementById(images[1].name).addEventListener('click', shuff);
document.getElementById(images[2].name).addEventListener('click', shuff);

function countClicks(event) {
  var elId = event.target.id;
  console.log(elId);
  if (elId === images[0].name) images[0].voteCounter++;
}
function countClicks2(event) {
  var elId = event.target.id;
  console.log(elId);
  if (elId === images[1].name) images[1].voteCounter++;
}
function countClicks3(event) {
  var elId = event.target.id;
  console.log(elId);
  if (elId === images[2].name) images[2].voteCounter++;
}

document.getElementById(images[0].name).addEventListener('click', countClicks);
document.getElementById(images[1].name).addEventListener('click', countClicks2);
document.getElementById(images[2].name).addEventListener('click', countClicks3);
