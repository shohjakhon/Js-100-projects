"use strict";

const container = document.querySelector(".container"),
  box = document.querySelector(".box"),
  title = document.querySelector(".title h2"),
  req = document.querySelector(".request");

function hide() {
  req.classList.add("hide");
  req.classList.remove("show");
  container.classList.add("show");
  container.classList.remove("hide");
}

let keyArr = ["code", "keyCode", "key"];

function keyInfo(e) {
  e.preventDefault();
  box.innerHTML = "";

  console.log(e);

  hide();

  title.textContent = e.keyCode;

  keyArr.forEach((elem) => {
    box.innerHTML += `
 <div class="box-item">
          <h4>e.${elem}</h4>
          <h2>${e[elem]}</h2>
 </div>
  `;
  });
}
window.addEventListener("keydown", keyInfo);

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  swal({
    title: "Tekshiryabman ",
    buttons: false ,
    
  });
  setTimeout(() => {
    swal({
      title: "Sorry😔 ",
      icon:"error",
      text: "contextmenu does not work",
      timer: 2000
    });
  }, 2000);

 
});
