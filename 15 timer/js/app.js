"use strict";

const timer = document.querySelector(".box"),
  start = document.querySelector(".start"),
  stop = document.querySelector(".stop");

let x = 0;

timer.textContent = x;

function runTime() {
  x++;
  timer.textContent = x;
}

let click = 0;

let run;
start.addEventListener("click", () => {
  click++;

  if (click === 1) {
    run = setInterval(() => {
      runTime();
    }, 1000);
    timer.classList.add("run");
  }
});

stop.addEventListener("click", () => {
  click = 0;
  clearInterval(run);
  timer.classList.remove("run");
});
