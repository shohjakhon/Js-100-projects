"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab"),
    tabContents = document.querySelectorAll(".tab-contnet"),
    tabPraent = document.querySelector(".tabs");

  function hide() {
    tabContents.forEach((content) => {
      content.classList.add("hide");
      content.classList.remove("show");

      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
    });
  }

  function show(index) {
    tabs[index].classList.add("active");
    tabContents[index].classList.remove("hide");
    tabContents[index].classList.add("show");

    tabContents[index].querySelector("h2").textContent =
      tabs[index].textContent;
  }

  hide();
  show(0);

  tabPraent.addEventListener("click", (e) => {
    const target = e.target;

    if (target && target.classList.contains("tab")) {
      tabs.forEach((tab, index) => {
        if (target === tab) {
          hide();
          show(index);
        }
      });
    }
  });
});
