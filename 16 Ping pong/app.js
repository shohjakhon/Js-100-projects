"use strict";

const player1 = document.querySelector("#player1"),
  player2 = document.querySelector("#player2"),
  gameLevel = document.querySelector("#gameLavel"),
  btnPlayer1 = document.querySelector("#btnPlayer1"),
  btnPlayer2 = document.querySelector("#btnPlayer2"),
  reset = document.querySelector("#reset");

let val = +gameLevel.value;
let count = 0;
let count2 = 0;

function stopPong() {
  if (val === count || val === count2) {
    btnPlayer1.removeEventListener("click", click);
    btnPlayer2.removeEventListener("click", click2);
  }
  if (val === count) {
    player1.classList.add("winner");
    player2.classList.add("loser");
  }
  if (val === count2) {
    player1.classList.add("loser");
    player2.classList.add("winner");
  }
}

function click() {
  count++;
  player1.textContent = count;
  stopPong();
}
function click2() {
  count2++;
  player2.textContent = count2;
  stopPong();
}

function remover(params) {
  params.classList.remove("loser");
  params.classList.remove("winner");
}

function res() {
  player1.textContent = 0;
  player2.textContent = 0;
  count = 0;
  count2 = 0;
  val = +gameLevel.value;

  remover(player1);
  remover(player2);
  btn();
}

function btn() {
  btnPlayer1.addEventListener("click", click);
  btnPlayer2.addEventListener("click", click2);
}

btn();

reset.addEventListener("click", res);
gameLevel.addEventListener("change", res);
