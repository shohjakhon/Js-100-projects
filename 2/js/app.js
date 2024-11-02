'use strict'

const form = document.querySelector('#form'),
btn = document.querySelector('#button'),
input = document.querySelector('#input'),
total = document.querySelector('#age_total');


function calculateAge(){

    const birthValue = input.value

    if(birthValue === ''){
        alert('Please enter your brithday')
    } else(
        total.textContent = getAge(birthValue)
    )
}

function getAge(birthValue){
    const currentDate = new Date(),
    birthDate = new Date(birthValue)

    let age = currentDate.getFullYear() - birthDate.getFullYear(),
        month = currentDate.getMonth() - birthDate.getMonth();

        if(month >= -6 && month <= 6){
            return age
        } 

        if(month < -6 && month >= -12){
            return age - 1
        }

        if(month > 6 && month <= 12){
            return age + 1
        }

}



form.addEventListener('submit' , (e)=>{
    e.preventDefault()
    calculateAge()
})