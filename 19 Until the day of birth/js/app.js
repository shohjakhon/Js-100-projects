"use strict";

// Created By Shohjakhon
// number: +998917870387
// Telegram: @Shohjahon_jumayev

const year = document.querySelector("#year"),
  millisecond = document.querySelector("#millisecond"),
  form = document.querySelector("form"),
  input = document.querySelector("form #dob"),
  timeBox = document.querySelector(".time-box");

function getDateInput() {
  return input.value;
}

function brithday() {
  const now = new Date(),
    brith = new Date(getDateInput());

  year.textContent = Math.trunc((now - brith) / (1000 * 60 * 60 * 24 * 365));
  millisecond.textContent = `.${((now - brith) / (1000 * 60 * 60 * 24 * 365))
    .toString()
    .split(".")[1]
    .slice(0, 9)}`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (getDateInput()) {
    form.remove();
    timeBox.classList.remove("hide");

    brithday();

    setInterval(brithday, 50);
  } else {
    alert("Tug`ilgn Kuningizni Kiriting");
  }
});
