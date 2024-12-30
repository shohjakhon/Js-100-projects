"use strict";

const searchInput = document.querySelector("#searchInput"),
  searchBtn = document.querySelector("#searchBtn"),
  searchTd = document.querySelectorAll(".transaction-table td"),
  arrowTable = document.querySelector(".arrow-table");

function searchTable() {
  let val = searchInput.value;

  if (val) {
    arrowTable.classList.add("d-none");
    arrowTable.classList.remove("d-flex");
  } else {
    arrowTable.classList.remove("d-none");
    arrowTable.classList.adda("d-flex");
  }

  searchTd.forEach((e) => {
    e.parentElement.classList.add("d-none");
  });

  searchTd.forEach((e) => {
    console.log();

    if (e.textContent.toLowerCase().includes(val.toLowerCase())) {
      e.parentElement.classList.remove("d-none");
    }
  });
  searchInput.value = "";
}

searchBtn.addEventListener("click", searchTable);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchTable();
  }
  if (e.key === "F12") {
    e.preventDefault();
  }
  if (e.code === "KeyU") {
    e.preventDefault();
  }
  console.log(e);
});
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
