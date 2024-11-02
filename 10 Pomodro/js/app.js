'use strict'

const display = document.querySelector('.timer-display'),
    start = document.querySelector('.start'),
    stop = document.querySelector('.stop'),
    reset = document.querySelector('.reset');


let timeCount = 1500,
    interval,
    timeLeft = timeCount;

function timer() {

    let minutes = Math.floor(timeLeft / 60),
        second = timeLeft % 60,
        formatTimer = `${minutes.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`

    display.textContent = formatTimer

}

function startTimer() {
    interval = setInterval(() => {
        timeLeft--;
        timer()

        if (timeLeft === 0) {
            clearInterval(interval);
            alert(`time's up`)

            timeLeft = timeCount

            timer()
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval)
}

function resetTimer() {
    clearInterval(interval)
    timeLeft = timeCount
    timer()
}

timer()
start.addEventListener('click', startTimer)
stop.addEventListener('click', stopTimer)
reset.addEventListener('click', resetTimer)

// TIMER CHANGE

const changeInput = document.querySelector('#timer-change'),
    changeBtn = document.querySelector('.btn-input');

function changeTimer() {
    timeLeft = changeInput.value
    timer()
    changeInput.value = ''
}

changeBtn.addEventListener('click', changeTimer)