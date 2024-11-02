'use strict'

const input = document.querySelector('#img-change'),
img = document.querySelector('#img'),
text = document.querySelector('h1');


input.addEventListener('change' , () =>{  
    console.log(input.files[0]);
    img.src = URL.createObjectURL(input.files[0]);
    text.textContent = input.files[0].name
   
} )