'use strict'

const APIKEY = 'aea3272b142940d280f23dcaea5d87fd';
const API = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${APIKEY}`;

const recipesBox = document.querySelector('.recipe_box'),
recipeList = document.querySelector('p')

function recipesItem(item){
        const element = document.createElement('div');
        element.classList.add('item')

        recipesBox.append(element)

    element.innerHTML += `
            <div class="img-box">
            <img src=${item.image} alt=${item.imageType}>
            </div>
            <h3 id="title">${item.title}</h3>
            <p>${item.extendedIngredients.map((ingredient) => ingredient.original).join(", ")}</p>
            <a href=${item.sourceUrl} target="_blank">VIEW RECIPE</a>
`
    // console.log(item.extendedIngredients.map((ingredient) => ingredient.original).join(', '));
    // console.log(item);
}

fetch(API)
    .then(respnse => respnse.json())
    .then(data => {
       for (let i = 0; i < 9; i++) {
        const element = data.recipes[i];
        recipesItem(element)
       }
    })