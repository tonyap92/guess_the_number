// CONSTS
const userInput = document.querySelector(".gn-field__input");
const checkButton = document.querySelector(".gn-field__btn");
const resultOut = document.querySelector(".gn-result__result-out");
const attemptOut = document.querySelector(".gn-result__attempt-out");
const countOut = document.querySelector(".gn-result__count-out");

let randomNumber = getRandomNumber(1, 100);
let attempts = 0;

// LISTENERS
userInput.addEventListener("input", function (event) {
  const value = event.target.value;
  if (!validateUserInput(value)) {
    alert("Please enter a number between 1 and 100!");
    clearUserInput();
  }
});

checkButton.addEventListener("click", handleCheckButton);

window.addEventListener("click", function (event) {
  if (event.target.classList.contains("alert-button")) {
    clearUserInput();
  }
});

// FUNCTIONS
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function validateUserInput(input) {
  const isNumber = /^\d+$/.test(input);
  return isNumber && input >= 1 && input <= 100;
}

function handleCheckButton() {
  const userNumber = parseInt(userInput.value);
  attempts++;
  countOut.textContent = attempts;
  console.log(
    "> handleCheckButton: userNumber, randomNumber",
    userNumber,
    randomNumber
  );

  if (!validateUserInput(userNumber)) {
    alert("Please enter a number between 1 and 100!");
    userInput.value = "";
    return;
  }

  if (userNumber > randomNumber) {
    resultOut.innerText = "Wrong answer. Try a smaller number.";
    attemptOut.innerText = `The number is less than ${userNumber}.`;
  } else if (userNumber < randomNumber) {
    resultOut.innerText = "Wrong answer. Try a bigger number.";
    attemptOut.innerText = `The number is bigger than ${userNumber}.`;
  } else {
    resultOut.innerText = "Congratulations! You guessed the number.";
    attemptOut.innerText = `Right! It was a number ${userNumber}.`;
  }

  userInput.value = "";
}

function clearUserInput() {
  userInput.value = "";
}
