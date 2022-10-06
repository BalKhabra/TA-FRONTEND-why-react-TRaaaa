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

const createElement = React.createElement;

function createUI() {
  const ui = allMovies.map((movie, index) => {
    const li = createElement(
      "li",
      { className: "movie" },
      createElement(
        "p",
        {
          className: "movieStatus",
          "data-index": index,
        },
        `${movie.status ? "watched" : "watch"}`
      ),
      createElement("p", {}, movie.movie),
      createElement(
        "button",
        { className: "btn-del", "data-index": index },
        "❌"
      )
    );
    return li;
  });
  console.log(ui);
  ReactDOM.render(ui, movieList);
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