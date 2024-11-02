'use strict'

const date = document.querySelector('#ageDate'),
    text = document.querySelector('h1'),
    remainingDate = document.querySelector('h2'),
    btn = document.querySelector('button')

const weeks = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];



function ageCalcute() {
    const currentDate = new Date();
    const ageDate = new Date(date.value);

    let age = Date.parse(currentDate) - Date.parse(ageDate),
        sec = Math.floor(age / 1000),
        min = Math.floor(sec / 60),
        hour = Math.floor(min / 60),
        day = Math.floor(hour / 24),
        week = Math.floor(day / 7),
        month = Math.floor(day / (365 / 12)),
        year = Math.floor(month / 12)


    text.textContent = `Siz tug\`ilganingizga ${year} yil ,
         ${month} oy,
         ${week} hafta,
          ${day} kun, 
          ${hour} soat,
           ${min} daqiqa ,
            ${sec} secund`


    let reDate = new Date(`${currentDate.getFullYear()}-${ageDate.getMonth()+1}-${ageDate.getDate()}`);
    
    console.log((Date.parse(reDate) - Date.parse(currentDate)) / (1000 * 60 * 60 * 24));

    remainingDate.textContent = `Keyingi Tug\`ilgan kuningizga - ${weeks[reDate.getDay()]}, ${reDate.getFullYear()}.0${reDate.getMonth()+1}.${reDate.getDate()} qolgan vaqt -  ${Math.round((Date.parse(reDate)-Date.parse(currentDate)) / (1000*60*60*24))} kun`

}




btn.addEventListener('click', () => {
    setInterval(() => {
        ageCalcute()
    }, 1000);
})