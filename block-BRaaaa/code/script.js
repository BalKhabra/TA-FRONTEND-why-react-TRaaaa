let input = document.querySelector(`input[type="text]`);
let rootElm = document.querySelector(`.movies_list`);

let allMovies = [
    {
        name: 'A Cinderella Story',
        watched: false,
    },
    {
        name: 'Divergent',
        watched: true,
    },
    {
        name: 'How To Lose A Guy In 10 Days',
        watched: true,
}
];

input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        allMovies.push({
            name: event.target.value,
            watched: false,
        });
        event.target.value = '';
        createMovieUI();
    }
})