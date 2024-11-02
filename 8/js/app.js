'use strict'

const display = document.querySelector('.convert-input'),
base = document.querySelector('#base'),
target = document.querySelector('#target'),
submit = document.querySelector('.convert-btn'),
text = document.querySelector('.convert-text')

submit.addEventListener('click', ()=>{
    const baseLength = base.value,
    targetLength = target.value;

    const convertionRate = convertGoTo(baseLength, targetLength)

    text.textContent = `${display.value} ${baseLength} - ${display.value * convertionRate} ${targetLength}`

    function convertGoTo(baseLength, targetLength){
        const exchangeRates = {
            km: {km: 1 , metr: 1000, sm: 100000, mm: 1000000 , dm: 10000},
            metr: { km: 0.001, metr: 1, sm: 100, mm: 1000, dm: 10 },
            sm: { km: 0.00001, metr: 0.01, sm: 1, mm: 10, dm: 0.1 },
            mm: { km: 0.000001, metr: 0.001, sm: 0.1, mm: 1, dm: 0.01 },
            dm: { km: 0.0001, metr: 0.1, sm: 10, mm: 100, dm: 1 },
        } 
        return exchangeRates[baseLength][targetLength]
    } 

    

})