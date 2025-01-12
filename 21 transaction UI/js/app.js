"use strict";

// TZ
// 1) Transaction btn bosilganda modal oyna ochilishi kerak -----
// 2) modal oyndan tranzaktsiya qoshish imkoni bolsin hamma malumotlar ozgarishi kerak
// 3) Search qismi ishlashi kerak
// 4) Har bir transaksiya jsda yozilishi kerak ------
// 5) anchor qismi ishlashi kerak har 10ta malumot ko`rsatilsin
// 6) modal oyndagi forma toldirilishi shart toldirilmasa oshibka chiqarsin
// 7) Animatsiya qoshilsin

const transactionTable = document.querySelector(".transaction-table tbody"),
  transactionModalInput = document.querySelectorAll(".transaction-modal input"),
  transactionModal = document.querySelector(".transaction-modal"),
  transactionBtn = document.querySelectorAll(".transaction > .btn"),
  body = document.querySelector("body"),
  transactionBtnClose = document.querySelector(".close"),
  check = document.querySelector("#checkbox"),
  kirim = document.querySelector('.kirim'),
  chiqm = document.querySelector('.chiqm'),
  generallMoney = document.querySelector('.genrallMoney'),
  arrowTable = document.querySelector('.arrow-table'),
  arrowBtn = document.querySelector('.arrow-btn'),
  arrows = document.querySelectorAll('.arrows');

function addElementTransaction(param = 1, count = 0) {
  transactionTable.innerHTML = "";


  transactionArray.forEach((e, ind) => {
    if (ind > count * 10 && ind < param * 10) {
      transactionTable.innerHTML += `<tr>
       <td>${e.comment}</td>
      <td class="${e.plusOrMinus ? "plus" : "minus"}">
      ${e.plusOrMinus ? "" : "-"} ${e.money.toLocaleString('uz-UZ', { style: 'decimal' })} UZS</td>
      <td>${e.where}</td>
     <td>${e.date}</td>
     </tr>`;
    }
  })

}

const transactionArray = [
  {
    comment: "Iyun oyi uchun kommunal to’lovlar",
    money: 750000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "Avgust oyi uchun kommunal to’lovlar",
    money: 750000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "Sentyabr oyi uchun kommunal to’lovlar",
    money: 750000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: true,
  },
  {
    comment: "Oktybar oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "Oktybar oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "Oktybar oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "Oktybar oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "Oktybar oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "Oktybar oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "OXIRGI AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },
  {
    comment: "Misol uchun AMAL oyi uchun kommunal to’lovlar",
    money: 1005000,
    where: "Kommunal to’lov",
    date: "30/06/2024",
    plusOrMinus: false,
  },


];
addElementTransaction();
// transactionModal.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let createObj = {
//     comment: transactionModalInput[0].value,
//     money: transactionModalInput[1].value,
//     where: transactionModalInput[2].value,
//     date: transactionModalInput[3].value,
//     plusOrMinus: transactionModalInput[4].checked,
//   };

//   transactionArray.push(createObj);

//   addElementTransaction();
//   addTransactionClose();
//   transactionModal.reset();
// });

// transactionBtn.forEach((e) => {
//   e.addEventListener("click", () => {
//     const transactionContainer = document.querySelector(
//       ".transaction-container"
//     );

//     transactionContainer.classList.remove("d-none");
//     transactionContainer.classList.add("d-flex");

//     body.style.overflow = "hidden";
//   });
// });

// function addTransactionClose() {
//   const transactionContainer = document.querySelector(".transaction-container");

//   transactionContainer.classList.add("d-none");
//   transactionContainer.classList.remove("d-flex");

//   body.style.overflow = "auto";
// }

// transactionBtnClose.addEventListener("click", addTransactionClose);
// document.addEventListener("keydown", (e) => {
//   if (e.code === "Escape") {
//     addTransactionClose();
//   }
// });

// SEARCH

function searchFunck() {
  let serchVal = searchInput.value

  if (serchVal == '') {
    hideArrow(transactionArray.length)
    addElementTransaction();

  } else {
    hideArrow(0)
    addElementTransaction(Math.ceil(transactionArray.length / 10), 0)
  }

  const tableTd = document.querySelectorAll('.transaction-table td')


  tableTd.forEach(e => {
    e.parentElement.classList.add('d-none')
  })

  tableTd.forEach(e => {
    if (e.textContent.toLowerCase().includes(serchVal.toLowerCase())) {
      e.parentElement.classList.remove('d-none')
    }
  })
}

searchInput.addEventListener('input', searchFunck)

// GENERALL MONEY

function moneyUpdate() {
  let kirmCount = 0,
    chiqmCount = 0
  transactionArray.forEach(e => {
    if (e.plusOrMinus) {
      kirmCount += e.money
    } else {
      chiqmCount += e.money
    }
  })
  kirim.textContent = kirmCount.toLocaleString('uz-UZ', { style: 'decimal' }) + ' UZS'
  chiqm.textContent = chiqmCount.toLocaleString('uz-UZ', { style: 'decimal' }) + ' UZS'
  generallMoney.textContent = (kirmCount - chiqmCount).toLocaleString('uz-UZ', { style: 'decimal' }) + ' UZS'
  generallMoney.parentElement.classList.add(kirmCount - chiqmCount < 0 ? "card-minusAll" : 'card-plussAll')
}

moneyUpdate()

// ARROW

function hideArrow(params) {
  if (params <= 10) {
    arrowTable.classList.add('d-none')
  } else {
    arrowTable.classList.remove('d-none')
  }

}

function arrowTableFunck() {
  for (let i = 0; i < Math.ceil(transactionArray.length / 10); i++) {
    arrowBtn.innerHTML += `<button class="btn">${i + 1}</button>`
  }

  let btns = arrowBtn.querySelectorAll('button')

  btns[0].classList.add('active')

  btns.forEach((e, ind) => {
    e.addEventListener('click', () => {
      btns.forEach(elem => {
        elem.classList.remove('active')
      })
      e.classList.add('active')
      addElementTransaction(ind + 1, ind)
    })
  })

  let count = 0

  arrows[0].addEventListener('click', () => {
    count -= 1

    if (count < 0) {
      count = btns.length - 1
    }
    btns.forEach(elem => {
      elem.classList.remove('active')
    })
    btns[count].classList.add('active')
    addElementTransaction(count + 1, count)
  })
  arrows[1].addEventListener('click', () => {
    count += 1

    if (count === btns.length) {
      count = 0
    }

    btns.forEach(elem => {
      elem.classList.remove('active')
    })

    btns[count].classList.add('active')
    addElementTransaction(count + 1, count)

  })
}


hideArrow(transactionArray.length)
arrowTableFunck()