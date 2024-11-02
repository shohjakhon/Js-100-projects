'use strict'

const roll = document.querySelector('.roll'),
btn = document.querySelector('#btn'),
list = document.querySelector('.list');
let newArr = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860","&#9861"],
summ = 1;

function listAddElement(summ, roll){
    list.innerHTML += `
    
    <div class="list_item">
            <div class="list_text">
                <h2>Roll ${summ}:</h2>
            </div>
            <div class="list_icon">
                ${roll}
            </div>
        </div>
    `
}

function animRoll(){
    roll.classList.add('roll-animation');
    setTimeout(() => {
        roll.classList.remove('roll-animation');
    }, 1000);
}

btn.addEventListener('click', ()=>{
    let  randomRoll = newArr[Math.floor(Math.random() * 6)]
    roll.innerHTML = randomRoll
    console.log(randomRoll);
    listAddElement(summ++, randomRoll)
    animRoll()
})