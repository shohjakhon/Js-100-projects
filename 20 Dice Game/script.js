"use strict";

const btnNew = document.querySelector(".btn--new"),
  btnRoll = document.querySelector(".btn--roll"),
  btnHold = document.querySelector(".btn--hold");

// variable

let currentScore = 0;
let activePlayer = 0;
let scoreArr = [0, 0];
let gameOver = true;
let deadLine = 100;

//Function

function newGame() {
  currentScore = 0;
  activePlayer = 0;
  scoreArr = [0, 0];
  gameOver = true;
  document.querySelector(".dice").style.display = "none";
  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");
  document.querySelector(`#current--0`).textContent = 0;
  document.querySelector(`#current--1`).textContent = 0;
  document.querySelector(`#score--0`).textContent = 0;
  document.querySelector(`#score--1`).textContent = 0;
  document.querySelector(`.player--0`).classList.add("player--active");
  document.querySelector(`.player--1`).classList.remove("player--active");
}

function switchedPlayer() {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(`.player--0`).classList.toggle("player--active");
  document.querySelector(`.player--1`).classList.toggle("player--active");
}

// Event

document.addEventListener("keydown", (e) => {
  e.preventDefault();

  if (e.key === "F5") {
    newGame();
  }
});
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

document.querySelector(".dice").style.display = "none";

btnRoll.addEventListener("click", () => {
  if (gameOver) {
    let random = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".dice").style.display = "block";

    document.querySelector(".dice").src = `./dice-${random}.png`;

    if (random !== 1) {
      currentScore += random;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchedPlayer();
    }
  }
});

btnHold.addEventListener("click", () => {
  if (gameOver) {
    scoreArr[activePlayer] += currentScore;

    document.querySelector(`#score--${activePlayer}`).textContent =
      scoreArr[activePlayer];

    if (scoreArr[activePlayer] >= deadLine) {
      gameOver = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle("player--winner");
    }
    switchedPlayer();
  }
});

btnNew.addEventListener("click", newGame);
