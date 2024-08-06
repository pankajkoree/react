const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2VlZmRhZGVhZjk3OTQ3MDhmY2E3ZjI2YTNjYzQ1NSIsIm5iZiI6MTcyMjkxMjQ1NS45MTEyOCwic3ViIjoiNjZiMThlMWQ2Yjk2OGNhOTJhZTI1OGY5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.JRPVOfMbTjXHgaSZFZBhYR2wgX-qFoiMXVIfad9xaXM",
  },
};

// card section
const card = document.querySelector(".card");

const movieTitle = document.querySelector(".movieTitle");
const moviePoster = document.querySelector(".movieImage");
const movieReleaseYear = document.querySelector(".movieReleaseYear");
const searchInput = document.querySelector("#movie-search-box");
const searchButton = document.querySelector(".btn1");

const moviesTitleArray = [];
const moviesDetailsArray = [];
async function getMovieTitle() {
  const data = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  );

  const response = await data.json();

  let getInputTitle;

  searchButton.addEventListener("click", () => {
    getInputTitle = searchInput.value;
    console.log(getInputTitle);

    response.results.find((obj) => {
      if (obj.title === getInputTitle) {
        const result = obj;

        console.log(result);

        movieTitle.textContent = result.title;

        moviePoster.src += result.poster_path;
        movieReleaseYear.textContent += result.release_date;
      }
    });
  });
}
getMovieTitle();
