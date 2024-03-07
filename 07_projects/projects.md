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