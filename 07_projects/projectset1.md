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
