let card = document.querySelector(".card");
let movieTitle = document.querySelector(".movieTitle");
let moviePoster = document.querySelector(".movieImage");
let movieReleaseYear = document.querySelector(".movieReleaseYear");
let searchInput = document.querySelector("#movie-search-box");
let searchButton = document.querySelector(".btn1");
let getMoreInfo = document.querySelector(".getMoreInfo");
let newSection = document.querySelector(".newCard");

const apiKey = "ded916aa";
const apiUrl = "https://www.omdbapi.com/?i=tt3896198";

async function getMovieDetails(movieName) {
  const response = await fetch(
    apiUrl + `&apikey=${apiKey} ` + `&t=${movieName}`
  );
  //   console.log(apiUrl + `&apikey=${apiKey}` + `&t=${movieName}`);
  var data = await response.json();
  console.log(data);

  movieTitle.textContent = data.Title;
  moviePoster.src = data.Poster;
  movieReleaseYear.textContent = "Release Year : " + data.Year;

  getMoreInfo.addEventListener("click", () => {
    newSection.innerHTML = `
    <p class="newCardPlot"><u>Plot</u> <br> ${data.Plot}</p>
    <p class="newCardActors"><u>Actors</u> <br> ${data.Actors}</p>
    <p class="newCardDirector"><u>Director</u> <br> ${data.Director}</p>
    `;
    console.log(data.Plot);
    console.log(data.Actors);
    console.log(data.Director);
    newSection.style.display = "block";
  });
}

searchButton.addEventListener("click", () => {
  const getMovieName = searchInput.value;
  getMovieDetails(getMovieName);
});
