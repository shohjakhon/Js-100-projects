'use strict'

const API_KEY = '29a0230a2e7e4cc12cfe45fc60a9a21b',
    API = `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`


const uzs = document.querySelector('.uzs'),
    usd = document.querySelector('.usd'),
    uzsGroup = document.querySelector('.uzs-group'),
    usdGroup = document.querySelector('.usd-group');

function exchange(currency, toCurrency) {
    const request = new XMLHttpRequest();

    request.open('GET', '../json/curent.json')
    request.setRequestHeader('Content-Type', 'aplication/json', 'charset=utf-8')
    request.send()
    console.log(request.status);
    
    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response)
            if (toCurrency === usd) {
                toCurrency.value = (+currency.value / data.curent.usd).toFixed(2)
            } else {
                toCurrency.value = (+currency.value / data.curent.uzs).toFixed(2)
            }
        } else {
            toCurrency.value = 'Something went wrong'
        }
    })
}

uzs.addEventListener('input', (e) => {
    exchange(uzs, usd)
})

usd.addEventListener('input', (e) => {
    exchange(usd, uzs)
})

const changeBtn = document.querySelector('#change'),
uzsOrder = document.querySelector('#uzs')

let val = 0

changeBtn.addEventListener('click', ()=>{
    if (val % 2 == 0) {
        uzsOrder.classList.add('order-1')
    }
    else{
        uzsOrder.classList.remove('order-1')
    }
    val++

    // console.log(uzs.value);
    uzs.value = ''
    usd.value = ''
})
