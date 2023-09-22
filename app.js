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
///////////////
let failedContainer = document.getElementById('failed-container');
///////////
movieSearchContainer.classList.add('d-none');
let loader = document.getElementById('animation-loader');
loader.classList.add('d-none');

function findMovie(){
    loader.classList.remove('d-none');
    let movieName = document.getElementById('movieName');
    let url = api + movieName.value;

    fetch(url).then((response)=>{
        // console.log(response);
        // if(response.Error == "movie not found!"){
        //     console.log("movie not found");
        // }
         
        //  console.log(response.status);
        //  console.log(response.ok);
        return response.json();
    }).then((response)=>{
        loader.classList.add('d-none');
        if(response.Title == undefined){
            let failedResponse = document.getElementById('failed');
            failedContainer.classList.remove('d-none');
            failedResponse.innerHTML = "";
            failedResponse.innerText = "Movie Not Found";
            //console.log("movie not found");
            movieSearchContainer.classList.add('d-none');
            // return;
            
        }else{
            // failedResponse.innerHTML = "";
            
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
            failedContainer.classList.add('d-none');
            // failedResponse.innerHTML = "";
            // failedResponse.innerText = "";

        }
        

    })
}