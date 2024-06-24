# Projects Related to DOM

Source Code
### Project 1 (Colour Switcher)
HTML
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>JavaScript Background Color Switcher</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
    </nav>
    <div class="canvas">
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <span class="button" id="orange"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```
Java Script
```Javascript
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach((button) => {
  button.addEventListener('click', (event) => {
    body.style.backgroundColor = event.target.id;
  });
});
```
CSS
```CSS
html {
  margin: 0;
}

span {
  display: block;
}
.canvas {
  margin: 100px auto 100px;
  width: 80%;
  text-align: center;
}

.button {
  width: 100px;
  height: 100px;
  border: solid black 2px;
  display: inline-block;
}

#grey {
  background: grey;
}

#white {
  background: white;
}
#blue {
  background: blue;
}
#yellow {
  background: yellow;
}
#orange {
  background: orange;
}
```

## Project 2 (BMI Calculator)
HTML
``` 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>BMI Calculator</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
    </nav>
    <div class="container">
      <h1>BMI Calculator</h1>
      <form>
        <p><label>Height in CM: </label><input type="text" id="height" /></p>
        <p><label>Weight in KG: </label><input type="text" id="weight" /></p>
        <button>Calculate</button>
        <div id="results"></div>
        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Greater than 24.9</p>
        </div>
      </form>
    </div>
  </body>
  <script src="script.js"></script>
</html>
```
CSS
```CSS
.container {
  width: 575px;
  height: 825px;

  background-color: #797978;
  padding-left: 30px;
}
#height,
#weight {
  width: 150px;
  height: 25px;
  margin-top: 30px;
}

#weight-guide {
  margin-left: 75px;
  margin-top: 25px;
}

#results {
  font-size: 35px;
  margin-left: 90px;
  margin-top: 20px;
  color: rgb(241, 241, 241);
}

button {
  width: 150px;
  height: 35px;
  margin-left: 90px;
  margin-top: 25px;
  background-color: #fff;
  padding: 1px 30px;
  border-radius: 8px;
  color: #212121;
  text-decoration: none;
  border: 2px solid #212121;

  font-size: 25px;
}

h1 {
  padding-left: 15px;
  padding-top: 25px;
  
}
```
JavaScript
```
const form = document.querySelector('form');

let bmiWeight;
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);
  const results = document.getElementById('results');

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid Height ${height}`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid Weight ${weight}`;
  } else {
    bmiWeight = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmiWeight < 18.6) {
      results.innerHTML = `<span>${bmiWeight}<span><br><h4>You are Under Weight</h4>`;
    }
    if (bmiWeight > 18.6 || bmiWeight == 24.9) {
      results.innerHTML = `<span>${bmiWeight}<span><br><h4>You have normal Weight</h4>`;
    }
    if (bmiWeight > 24.9) {
      results.innerHTML = `<span>${bmiWeight}<span><br><h4>You are Over Weight</h4>`;
    }
  }
});
```
## Project 3 (Digital Clock)

HTML
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" type="text/css" href="../styles.css" />
    <title>Your Local Time</title>
    <style>
      body {
        background-color: #212121;
        color: #fff;
      }
      .center {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      #clock {
        font-size: 40px;
        background-color: orange;
        padding: 20px 50px;
        margin-top: 10px;
        border-radius: 10px;
      }
    </style>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
    </nav>
    <div class="center">
      <div id="banner"><span>Your local time</span></div>
      <div id="clock"></div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

JavaScript
```
const clock = document.getElementById('clock');

setInterval(function () {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```
## Project 4 (Guess a Number)
HTML
```<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../styles.css">
</head>
<body style="background-color:#212121; color:#fff;">
  <nav>
    <a href="/" aria-current="page">Home</a>
  </nav>
    
    <div id="wrapper">
      <h1>Number guessing game</h1>
    <p>Try and guess a random number between 1 and 100.</p>
    <p>You have 10 attempts to guess the right number.</p>
    </br>
        <form class="form">
            <label for="guessField" id="guess">Guess a number</label>
            <input type="text" id="guessField" class="guessField">
            <input type="submit" id="subt" value="Submit guess" class="guessSubmit">
        </form>

        <div class="resultParas">
            <p >Previous Guesses: <span class="guesses"></span></p>
            <p >Guesses Remaining: <span class="lastResult">10</span></p>
            <p class="lowOrHi"></p>
            <p class="gameOver"></p>
            <h2 class="gameStart"></h2>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
CSS
```
html {
    font-family: sans-serif;
  }
  
  body {
    width: 300px;
    max-width: 750px;
    min-width: 480px;
    margin: 0 auto;
    background-color: #212121;
  }
  
  .lastResult {
    color: white;
    padding: 7px;
  }
  
  .guesses {
    color: white;
    padding: 7px;
  }
  
  button {
    background-color: #141414;
    color: #fff;
    width: 250px;
    height: 50px;
    border-radius: 25px;
    font-size: 30px;
    border-style: none;
    margin-top: 30px;
    /* margin-left: 50px; */
  }
  
  #subt {
    background-color: #161616;
    color: #ffffff;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    font-size: 20px;
    border-style: none;
    margin-top: 20px;
  }
  
  #guessField {
    display: block;
    color: #000;
    width: 250px;
    height: 50px;
    font-size: 30px;
    border-style: none;
    margin: 10px auto;
    border: 5px solid #6c6d6d;
    text-align: center;
  }
  
  #guess {
    font-size: 55px;
    /* margin-left: 90px; */
    margin-top: 120px;
    color: #fff;
  }
  
  .guesses {
    background-color: #7a7a7a;
  }
  
  #wrapper {
    box-sizing: border-box;
    text-align: center;
    padding-bottom: 20px;
    height: 100%; 
    background-color: #474747;
    color: #fff;
    font-size: 25px;
  }
  
  h1 {
    background-color: #161616;
    padding: 20px 10px;
    color: #fff;
    text-align: center;
  }
  
  p {
    font-size: 16px;
    text-align: center;
  }
  ```
  JavaScript
  ```
  const randomNum = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const resultSection = document.querySelector('resultParas');
const lowOrHi = document.querySelector('.lowOrHi');
const gameOver = document.querySelector('.gameOver');
const gameRestart = document.querySelector('.gameStart');

let numGuess = 1;
let p = document.createElement('p');

submit.addEventListener('click', function (e) {
  e.preventDefault();
  const guess = userInput.value;
  console.log(guess);
  numGuess++;
  validateGuess(guess);
});

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter a Valid Number');
  } else if (guess < 1) {
    alert('Please Enter Number Greater than 1');
  } else if (guess > 100) {
    alert('Please enter number smaller than or equal to 100');
  } else {
    userInput.value = '';
    displayGuess(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess < randomNum) {
    displayMessage(`Guess Number ${guess} is Too Low`);
  } else if (guess > randomNum) {
    displayMessage(`Guess Number ${guess} is Too High`);
  } else {
    displayMessage('Congrats You guessed it Right!!');
    endGame();
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = message;
}

function displayGuess(guess) {
  guesSlot.innerHTML += `${guess}  `;
  if (11 - numGuess) {
    remaining.innerHTML = 11 - numGuess;
  } else {
    remaining.innerHTML = 11 - numGuess;
    endGame();
  }
}

function endGame() {
  userInput.setAttribute('disabled', '');
  gameRestart.innerHTML = 'Start New Game';
  gameOver.innerHTML = `Game Over, Random number was ${randomNum}`;
  startGame();
}

function startGame() {
  gameRestart.addEventListener('click', function () {
    guesSlot.innerHTML = '';
    numGuess = 1;
    remaining.innerHTML = 11 - numGuess;
    lowOrHi.innerHTML = '';
    gameOver.innerHTML = '';
    gameRestart.innerHTML = '';
    userInput.removeAttribute('disabled');
  });
}
```