let api =  'https://www.omdbapi.com/?apikey=70033b85&t=';

let title = document.getElementById('title');
let director = document.getElementById("director");
let actors = document.getElementById("actors");
let genre = document.getElementById("genre");
let desc = document.getElementById("desc");
let awards = document.getElementById("awards");
let writer = document.getElementById("writer");
let collection = document.getElementById("collection");
let date = document.getElementById("date");
let ratings = document.getElementById('ratings');
let img = document.getElementById('img');

let movieSearchContainer = document.getElementById('movie-search-container');
movieSearchContainer.classList.add('d-none');
let loader = document.getElementById('animation-loader');
loader.classList.add('d-none');

function findMovie(){
    loader.classList.remove('d-none');
    let movieName = document.getElementById('movieName');
    let url = api + movieName.value;

    fetch(url).then((response)=>{
        return response.json();
    }).then((response)=>{
        loader.classList.add('d-none');
        movieSearchContainer.classList.remove('d-none');
        title.innerText = response.Title;
        director.innerText = response.Director;
        actors.innerText = response.Actors;
        genre.innerText = response.Genre;
        desc.innerText = response.Plot;
        awards.innerText = response.Awards;
        writer.innerText = response.Writer;
        collection.innerText = response.BoxOffice;
        date.innerText = response.Released;
        ratings.innerText = response.imdbRating;
        img.src = response.Poster;

    })
}