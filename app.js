const mealWrap = document.getElementById('mealItem');
const showSingleMealWrap = document.getElementById('showSingleMeal');


function showMealItem(name) {
    for (let i = 0; i < name.meals.length; i++) {
        const singleMealWrap = document.createElement('div');
        const singleMeal = name.meals[i];
        singleMealWrap.className = 'meal'
        const singleMealDetail = `
            <img src = "${singleMeal.strMealThumb}"/>
            <h3> ${singleMeal.strMeal}</h3>
        `;
        singleMealWrap.innerHTML = singleMealDetail;
        mealWrap.appendChild(singleMealWrap)
    }
}

function mealItem(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            showMealItem(data)
        })
}

const searchBox = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', () => {
    const name = searchBox.value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
    mealItem(url);
})

function showTopMeal(name) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const mealIngredient = `
        <li class="liHead">Ingredient of ${data.meals[0].strMeal}</li>
        <li>${data.meals[0].strIngredient1}</li>
        <li>${data.meals[0].strIngredient2}</li>
        <li>${data.meals[0].strIngredient3}</li>
        <li>${data.meals[0].strIngredient4}</li>
        <li>${data.meals[0].strIngredient5}</li>
        <li>${data.meals[0].strIngredient6}</li>
        <li>${data.meals[0].strIngredient7}</li>
    `

            const showSingleMeal = document.getElementById('mealIngredient');
            showSingleMeal.innerHTML = mealIngredient

        })

}

mealWrap.addEventListener('click', event => {
    const clickedMeal = event.target.parentNode;
    const showSingleMeal = document.getElementById('mealDetail');
    showSingleMeal.innerHTML = clickedMeal.innerHTML
    showSingleMealWrap.className = 'singleShowMealItem';
    showTopMeal(showSingleMeal.innerText)
})

function error() {
    const errorMessage = "Not Found Your Meal, Try Again";
    mealWrap.innerText = errorMessage
}