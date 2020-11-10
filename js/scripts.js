var elFizzBuzzForm = document.querySelector('.fizzbuzz-form');
var elNumberInput = document.querySelector('.number-input');
var elFizzNumer = document.querySelector('.fizz-number');
var elBuzzNumber = document.querySelector('.buzz-number');
var elFizzBuzzNumber = document.querySelector('.fizzbuzz-number');
var elFizzResult = document.querySelector('.fizz-result');
var elBuzzResult = document.querySelector('.buzz-result');
var elFizzBuzzResult = document.querySelector('.fizzbuzz-result');
var fizz = 3;
var buzz = 5;

var fizzBuzzArray = [];
var fizzArray = [];
var buzzArray = [];

elFizzBuzzForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  var numberValue = parseFloat(Math.round(elNumberInput.value.trim()), 10);

  var fizzBuzzArray = [];
  var fizzArray = [];
  var buzzArray = [];

  if (isNaN(numberValue)) {
    alert('Now I will cut your itchy hand!');
    return;
  }

  if (numberValue <=2 ) {
    alert('Enter a number 3 or larger!');
    return;
  }

  for (var i = 1; i <= numberValue; i++) {
    if (i % fizz === 0 && i % buzz === 0) {
      fizzBuzzArray.push(i);
      elFizzBuzzNumber.textContent = fizzBuzzArray.length;
      var fizzBuzzList = document.createElement('p');
      elFizzBuzzResult.appendChild(fizzBuzzList);
      fizzBuzzList.textContent = i;
    }

    if (i % fizz === 0 && i % buzz!= 0) {
      fizzArray.push(i);
      elFizzNumer.textContent = fizzArray.length;
      var fizzList = document.createElement('p');
      elFizzResult.appendChild(fizzList);
      fizzList.textContent = i;
    }

    if (i % fizz != 0 && i % buzz === 0) {
      buzzArray.push(i);
      elBuzzNumber.textContent = buzzArray.length;
      var buzzList = document.createElement('p');
      elBuzzResult.appendChild(buzzList);
      buzzList.textContent = i;
    }
  }
})