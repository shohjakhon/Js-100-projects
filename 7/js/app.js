'use strict'

// ARRAY
const numbers = '1234567890',
    small = 'abcdefghijklmnopqrstuvwxyz',
    signs = ',./<>?:";\'|\\!@#$%^&**()_+№*/-'


let large = Array.from(small).map(item => item.toUpperCase()),
    generPassword = [];

large = large.reduce((item, sum) => item + sum)

//VARIABLE

const display = document.querySelector('#display'),
    btn = document.querySelector('#btn'),
    range = document.querySelector('#range'),
    num = document.querySelector('#num'),
    alphabet = document.querySelector('#alphabet'),
    bigAlphabet = document.querySelector('#big-alphabet'),
    sign = document.querySelector('#sign'),
    rangeBox = document.querySelector('.range-box'),
    copy = document.querySelector('#copy'),
    succesModal = document.querySelector('.succes-modal'),
    ignorModal = document.querySelector('.ignor-modal')

range.value = 10
rangeBox.children[1].textContent = range.value

let checkArr = [];

//GENERATE AND CHECK PASSWORD

function check() {
    display.value = ''

    let pass = []

    if (num.checked) {
        pass = Array.from(numbers).map(item => item)
    }
    if (alphabet.checked) {
        pass = [...pass, ...Array.from(small).map(item => item)]
    }
    if (bigAlphabet.checked) {
        pass = [...pass, ...Array.from(large).map(item => item)]
    }
    if (sign.checked) {
        pass = [...pass, ...Array.from(signs).map(item => item)]
    }
    
    generPassword = pass
    
    if (generPassword.length > 0) {
        for (let i = 0; i < range.value; i++) {
            display.value += generPassword[Math.floor(Math.random() * generPassword.length)]
        }
    }
    if (generPassword.length <= 0) {
        display.placeholder = 'plase checked checkbox'
    }     


}

function checkboxChange(params) {
    params.addEventListener('change', () => {
        check()
    })
}

// COPY TEXT FUNCTION

function copyText(params) {
    params.classList.remove('hide')
    setTimeout(() => {
        params.classList.add('hide')
    }, 1500);
}


check()
checkboxChange(num)
checkboxChange(alphabet)
checkboxChange(bigAlphabet)
checkboxChange(sign)

btn.addEventListener('click', () => {
    check()

})

range.addEventListener('input', () => {
    check()

    rangeBox.children[1].textContent = range.value
})

copy.addEventListener('click', () => {
    if (display.value.length > 0) {
        display.select();
        // display.setSelectionRange(0,range.value)

        navigator.clipboard.writeText(display.value)
            .then((data) => {
                copyText(succesModal)
            });
    }
    else{
        copyText(ignorModal)
    }
})

