"use strict";

const fullDay = document.querySelector("#full-day"),
  fullHour = document.querySelector("#hour"),
  fullMinute = document.querySelector("#minute"),
  fullSecond = document.querySelector("#second"),
  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

// GET DATE

function showDate() {
  const now = new Date();
  const nowArray = [
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
  ];

  const [year, month, day, hours, minute, second] = nowArray;

  fullDay.textContent = `${day < 10 ? "0" + day : day} ${
    months[month]
  }, ${year}`;

  fullHour.textContent = hours < 10 ? "0" + hours : hours;
  fullMinute.textContent = minute < 10 ? "0" + minute : minute;
  fullSecond.textContent = second < 10 ? "0" + second : second;
}

showDate();

setInterval(showDate, 1000);
