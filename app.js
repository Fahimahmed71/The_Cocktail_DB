document.getElementById("btn").addEventListener("click", () => {
  const searchEl = document.getElementById("search");
  const searchValue = searchEl.value;

  searchValue.value = "";

  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`
  )
    .then((res) => res.json())
    .then((data) => displaySearch(data.drinks));
});

function displaySearch(cocktail) {
  const sectionEl = document.getElementById("section");

  sectionEl.textContent = "";

  for (const loop of cocktail) {
    const div = document.createElement("div");

    div.innerHTML = `<img src="${loop.strDrinkThumb}" alt=""/>
                    <h5>${loop.strDrink}</h5>`;

    sectionEl.appendChild(div);
  }
}
