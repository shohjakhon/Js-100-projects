"use strict";

const leftArrow = document.querySelector(".arrow-left.arrow"),
  rightArrow = document.querySelector(".arrow-right.arrow"),
  contentItem = document.querySelectorAll(".content .content-item");

function changeItem(item = 0) {
  contentItem.forEach((e) => {
    e.classList.remove("show");
  });
  contentItem[item].classList.add("show");
}

function leftAnim() {
  count--;
  if (count < 0) {
    count = contentItem.length - 1;
  }
  changeItem(count);
  contentItem[count].classList.add("showAnimationLeft");
  setTimeout(() => {
    contentItem[count].classList.remove("showAnimationLeft");
  }, 2000);
}
function rightAnim() {
  count++;
  if (count > contentItem.length - 1) {
    count = 0;
  }
  changeItem(count);
  contentItem[count].classList.add("showAnimationRight");

  setTimeout(() => {
    contentItem[count].classList.remove("showAnimationRight");
  }, 2000);
}

changeItem();

let count = 0;

leftArrow.addEventListener("click", leftAnim);
rightArrow.addEventListener("click", rightAnim);

setInterval(rightAnim, 5000);