let movie = {
    apiKey :"4a20e0de",
    fetchMovie: function (movie) {
        fetch("http://www.omdbapi.com/?i=tt3896198&type=movie&t="
        +movie
        +"&apikey="
        +this.apiKey)
        .then((response) => response.json())
        .then((data) => this.getMovie(data));
    },
    getMovie: function (data) {
    
        const {Title, Poster, Plot, Genre, Runtime, Director, Actors, Released, imdbRating, Writer, Awards, BoxOffice} = data;
        document.querySelector(".movie-title").innerHTML = Title;
        document.querySelector(".movie-poster").src = Poster;
      
        document.querySelector(".movie-genre").innerHTML =`<span class="fw-bold">Genre:</span> ` + Genre;
        document.querySelector(".movie-year").innerHTML =`<span class="fw-bold">Release:</span> ` + Released;
        document.querySelector(".movie-rating").innerHTML =`<span class="fw-bold">Rating:</span> `+ imdbRating;
        document.querySelector(".movie-plot").innerHTML =`<span class="fw-bold">Plot:</span> ` + Plot;
        document.querySelector(".movie-actors").innerHTML =`<span class="fw-bold">Actors:</span> ` + Actors;    
        document.querySelector(".movie-writer").innerHTML =`<span class="fw-bold">Writer:</span> ` + Writer;
        document.querySelector(".movie-Awards").innerHTML =`<span class="fw-bold">Awards:</span> ` + Awards;
        document.querySelector(".movie-BoxOffice").innerHTML =`<span class="fw-bold">BoxOffice:</span> ` + BoxOffice;
        document.querySelector(".poster-link").setAttribute("href", Poster);
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?Movie)";
        setTimeout(() => {
            document.querySelector(".loading").classList.remove('loading');
            document.querySelector(".spinner").style.display = "none";
            document.querySelector(".image-wrapper").classList.remove('image-wrapper');
        },500);

    }
}

const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", function () {
    movie.fetchMovie(searchBox.value);
});

searchBox.addEventListener("keyup", function (e) {
    if(e.key === "Enter") {
        movie.fetchMovie(searchBox.value);
    }
});

movie.fetchMovie("Guardians of the Galaxy");