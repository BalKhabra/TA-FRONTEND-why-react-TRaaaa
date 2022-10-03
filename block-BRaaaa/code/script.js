const movieInput = document.querySelector(".movie-input");
const movieList = document.querySelector(".movie-list");
const allMovies = [];

function handleMovieSubmit(e) {
  if (e.keyCode === 13) {
    allMovies.push({
      movie: e.target.value,
      status: false,
    });
    e.target.value = "";
    createUI();
  }
}

function createUI() {
  movieList.innerHTML = "";
  allMovies.forEach((movie, index) => {
    const li = document.createElement("li");
    li.classList.add("movie");
    const input = document.createElement("input");
    input.classList.add("movieStatus");
    input.setAttribute("data-index", index);
    input.type = "checkbox";
    input.checked = movie.status;
    const p = document.createElement("p");
    p.innerText = movie.movie;
    const button = document.createElement("button");
    button.classList.add("btn-del");
    button.innerText = "❌";
    button.setAttribute("data-index", index);
    li.append(input, p, button);
    movieList.append(li);
  });
}
movieInput.addEventListener("keyup", handleMovieSubmit);
movieList.addEventListener("click", (e) => handleClick(e));

function handleClick(e) {
  const className = e.target.classList.value;
  const index = e.target.dataset.index;
  if (className === "btn-del") {
    allMovies.splice(index, 1);
  }
  if (className === "movieStatus") {
    allMovies[index].status = !allMovies[index].status;
  }
  createUI();
}