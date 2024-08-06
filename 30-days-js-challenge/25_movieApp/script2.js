let card = document.querySelector(".card");
let movieTitle = document.querySelector(".movieTitle");
let moviePoster = document.querySelector(".movieImage");
let movieReleaseYear = document.querySelector(".movieReleaseYear");
let searchInput = document.querySelector("#movie-search-box");
let searchButton = document.querySelector(".btn1");

let moviesTitleArray = [];
let moviesDetailsArray = [];

const apiKey = "ded916aa";
const apiUrl = "https://www.omdbapi.com/?i=tt3896198";

async function getMovieDetails(movieName) {
  const response = await fetch(
    apiUrl + `&apikey=${apiKey} ` + `&t=${movieName}`
  );
//   console.log(apiUrl + `&apikey=${apiKey}` + `&t=${movieName}`);
  var data = await response.json();
  console.log(data);

  movieTitle.textContent = data.Title
  moviePoster.src = data.Poster
  movieReleaseYear.textContent += data.Year

}

searchButton.addEventListener("click", () => {
  const getMovieName = searchInput.value;
  getMovieDetails(getMovieName);
});
