"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#btn"),
    title = document.querySelector(".title"),
    body = document.querySelector("body"),
    notif = document.querySelector(".notification");

  let values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  function randomNumber(params) {
    return Math.trunc(Math.random() * params);
  }

  function colorGenerated() {
    let color = "#";
    let randomNum = 0;

    for (let i = 0; i < 6; i++) {
      color += values[randomNumber(values.length)];
    }

    return color;
  }

  function createColorGradient() {
    let color1 = colorGenerated(),
      color2 = colorGenerated();
    let bgColor = `linear-gradient(${randomNumber(
      360
    )}deg, ${color1},${color2})`;

    body.style.background = bgColor;
    title.textContent = bgColor;
  }

  function notifus() {
    navigator.clipboard.writeText(`background:${title.textContent};`);
    notif.innerHTML += `<div class="notification-item">
            Copied text
        </div>`;

    const notifItem = document.querySelectorAll(".notification-item");

    notifItem.forEach((e, index) => {
      setInterval(() => {
        // e.textContent += '7'
        e.remove();
      }, 700 * (index + 1));
    });
  }

  createColorGradient();

  btn.addEventListener("click", createColorGradient);

  document.addEventListener("keydown", (e) => {
    e.preventDefault();

    if (e.key === "F5") {
      createColorGradient();
    }
  });

  title.addEventListener("click", notifus);
});
