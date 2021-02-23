//App functions
function init() {}

function renderData() {
  //getdata from API
  async function loadData(meal) {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=" + meal
    );
    const data = await response.json();
    return data;
  }
  const gotData = loadData(document.querySelector("#search-box").value).then(
    (data) => {
      for (let i = 0; i < data.meals.length; i++) {
        let html = `
    <div class="recipe__items">
    <img src="${data.meals[i].strMealThumb}" alt="Photo" id="img-${i}" />
    <h1 class="recipe__name" >${data.meals[i].strMeal}</h1>
    <h3 class="recipe__catagory">Catagory: ${data.meals[i].strCategory}</h3>
    <h3 class="recipe__catagory">Cuisine: ${data.meals[i].strArea}</h3>
    </div>  
    `;
        const recipeContainer = document.querySelector(".recipe");
        recipeContainer.insertAdjacentHTML("beforeend", html);
      }
      console.log(data.meals[0]);
      document.querySelector("#search-box").value = "";
    }
  );
}

const searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", function () {
  document.querySelector(".recipe").innerHTML = "";
  renderData();
});

//details
document
  .querySelector(".recipe")
  .addEventListener("click", (event) => console.log(event.target));
