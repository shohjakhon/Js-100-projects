"use strict";

const val = document.querySelector(".add-task input"),
  btn = document.querySelector(".add-task button"),
  list = document.querySelector(".list");

btn.addEventListener("click", () => {  

  if (val.value == "") {
    alert("Input Maydon bosh");
  } else {
    list.innerHTML += `<li>${val.value}<i class="trash fa-solid fa-trash"></i></li>`;
  }

  val.value = "";
});

list.addEventListener('click' , e => {
   if (e.target.classList.contains('trash')) {
    e.target.parentElement.remove()
   }
})
