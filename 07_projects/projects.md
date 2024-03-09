# Projects related to DOM
## Projects Link
[click here]( https://github.com/hiteshchoudhary/ )

# Solution Code
## Project 1

```javascript

const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "orange") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if ((height === '' || height < 0 || isNaN(height)) && (weight === '' || weight < 0 || isNaN(weight))) {
    results.innerHTML = `<span style="color: red;">Please provide a valid height and weight.</span><br>`;
  } else if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `<span style="color: red;">Please provide a valid height.</span>`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `<span style="color: red;">Please provide a valid weight.</span>`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let bmiMessage = '';

    if (bmi < 18.6) {
      bmiMessage = `${bmi} (Underweight)`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      bmiMessage = `${bmi} (Normal)`;
    } else {
      bmiMessage = `${bmi} (Overweight)`;
    }

    results.innerHTML = bmiMessage;
  }
});

```
## Project 3

```javascript

const time = document.getElementById('time')
const date = document.getElementById('date')

setInterval(() => {
    let clock = new Date
    time.innerHTML = clock.toLocaleTimeString();
    date.innerHTML = clock.toLocaleDateString();
}, 1000);

```
## Project 4

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  if (message.includes('TOOO High')) {
    lowOrHi.innerHTML = `<h2 style="color: red;">${message}</h2>`;
  } else if (message.includes('TOOO low')) {
    lowOrHi.innerHTML = `<h2 style="color: yellow;">${message}</h2>`;
  } else if (message.includes('You guessed it right')) {
    lowOrHi.innerHTML = `<h2 style="color: green; cursor: pointer;">${message}</h2>`;
  } else {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
  }
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<button id="newGame" style="cursor: pointer; padding-top:5px; margin-top: -2px;">Start new Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}


```