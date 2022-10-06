// const movieInput = document.querySelector(".movie-input");
// const movieList = document.querySelector(".movie-list");
// const allMovies = [];

// function handleMovieSubmit(e) {
//   if (e.keyCode === 13) {
//     allMovies.push({
//       movie: e.target.value,
//       status: false,
//     });
//     e.target.value = "";
//     createUI();
//   }
// }

// function createElement(type, attr, ...children) {
//   const element = document.createElement(type);
//   for (let key in attr) {
//     if (key.startsWith("data-")) {
//       element.setAttribute(key, attr[key]);
//     } else {
//       element[key] = attr[key];
//     }
//   }
//   children.forEach((child) => {
//     if (typeof child === "object") {
//       element.append(child);
//     }
//     if (typeof child === "string") {
//       const node = document.createTextNode(child);
//       element.append(child);
//     }
//   });
//   return element;
// }

// function createUI() {
//   movieList.innerHTML = "";
//   allMovies.forEach((movie, index) => {
//     const li = createElement(
//       "li",
//       { className: "movie" },
//       createElement("input", {
//         className: "movieStatus",
//         "data-index": index,
//         type: "checkbox",
//         checked: movie.status,
//       }),
//       createElement("p", {}, movie.movie),
//       createElement(
//         "button",
//         { className: "btn-del", "data-index": index },
//         "❌"
//       )
//     );

//     movieList.append(li);
//   });
// }
// movieInput.addEventListener("keyup", handleMovieSubmit);
// movieList.addEventListener("click", (e) => handleClick(e));

// function handleClick(e) {
//   const className = e.target.classList.value;
//   const index = e.target.dataset.index;
//   if (className === "btn-del") {
//     allMovies.splice(index, 1);
//   }
//   if (className === "movieStatus") {
//     allMovies[index].status = !allMovies[index].status;
//   }
//   createUI();
// }
//------------------new

let input = document.querySelector(`input[type="text]`);
let rootElm = document.querySelector('.movies__list');

let allMovies = [
  {
    name: 'A Cinderella Story',
    watched: true,
  },
  {
    name: 'A Cinderella Story',
    watched: false,
  }
]


input.addEventListener('keyup', (event) => {
  if (e.keyCode === 13) {
    allMovies.push({
      name: e.target.value,
      watched: false,
    });
    e.target.value = "";
    createMovieUI(allMovies, rootElm);
  }
});

function handleChange(event) {
  let id = event.target.id;

  allMovies[id].watched = !allMovies[id].watched;
  createMovieUI(allMovies, rootElm);
}

function createMovieUI(data, root){
  root.innerHTML = '';
  data.forEach((movie, i) => {
    let li = createElement(
      'li', 
      null,
      createElement('label', {for: i}, movie.name),
      createElement(
        'button', 
        {id: i, onClick: handleChange}, 
        movie.watched ? 'watched' : 'to watch'
        )
    );
    rootElm.append(li);
  });
}

createMovieUI(allMovies, rootElm);

function createElement(type, attr = {}, ...children) {
  const element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith('data-')) {
      element.setAttribute(key, attr[key]);
    } else if (key.startsWith('on')){
      let eventType = key.replace('on', '').toLowerCase();
      element.addEventListener(eventType, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }
  children.forEach((child) => {
    if (typeof child === 'object') {
      element.append(child);
    }
    if (typeof child === "string") {
      const node = document.createTextNode(child);
      element.append(child);
    }
  });
  return element;
}