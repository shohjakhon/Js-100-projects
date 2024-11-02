const btn = document.querySelector('#button'),
num = document.querySelector('#num'),
percentage = document.querySelector('#percentage'),
total = document.querySelector('.total_score');

function calculate(){
    let val = +num.value,
        valPer = +percentage.value;
        
        total.textContent = `$${(val + val * (valPer / 100)).toFixed(2)}`
    
}

btn.addEventListener('click' , calculate)