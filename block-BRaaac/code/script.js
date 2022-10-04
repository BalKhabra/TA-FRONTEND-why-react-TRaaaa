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

function createElement(type, attr, ...children) {
  const element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith("data-")) {
      element.setAttribute(key, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }
  children.forEach((child) => {
    if (typeof child === "object") {
      element.append(child);
    }
    if (typeof child === "string") {
      const node = document.createTextNode(child);
      element.append(child);
    }
  });
  return element;
}

function createUI() {
  movieList.innerHTML = "";
  allMovies.forEach((movie, index) => {
    const li = createElement(
      "li",
      { className: "movie" },
      createElement("input", {
        className: "movieStatus",
        "data-index": index,
        type: "checkbox",
        checked: movie.status,
      }),
      createElement("p", {}, movie.movie),
      createElement(
        "button",
        { className: "btn-del", "data-index": index },
        "❌"
      )
    );

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