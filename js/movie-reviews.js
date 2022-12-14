"use strict";

fetch ("https://efficient-wholesale-pediatrician.glitch.me/movies")
    .then (resp => resp.json())
    .then(data => console.log(data))


let options = {
    method: 'GET',
    headers: {
        'Content-Type' : 'application/json',
    }
}

const url = 'https://efficient-wholesale-pediatrician.glitch.me/movies';
fetch(url, options)
    .then( response => console.log(response) ) /* review was created successfully */
    .catch( error => console.error(error) ); /* handle errors */

const getMovies = () => {
    fetch('https://efficient-wholesale-pediatrician.glitch.me/movies')
        .then(resp => resp.json())
        .then(movies => {
            /// builds the info from the DB
            let htmlStr = " ";
            for (let movie of movies) {
                htmlStr += `<div class="col">`
                htmlStr += `<div class="card my-2 container-fluid" style="width: 18rem;">`
                htmlStr += `<img contenteditable="true" src="${movie.poster}" alt="posterZ" style="width: 200px; height: auto;" class="card-img-top mx-auto">`
                htmlStr += `<div class="editCard card-body">`
                htmlStr += `<div class="card-title title editTitle" id="testID" contenteditable="true">${movie.title.toUpperCase()}</div>`
                htmlStr += `PosterURL: <div class="card-text poster editPoster" contenteditable="true">${movie.poster}</div>`
                htmlStr += `Release: <div class="card-text year editYear" contenteditable="true">${movie.year}</div>`
                htmlStr += `Director: <div class="card-text editDirector" contenteditable="true">${movie.director}</div>`
                htmlStr += `Rating: <div class="card-text editRating " contenteditable="true">${movie.rating}</div>`
                htmlStr += `Plot: <div class="card-text editPlot " contenteditable="true"> ${movie.plot}</div>`
                htmlStr += `Actors: <div class="card-text editActors" contenteditable="true"> ${movie.actors}</div>`
                htmlStr += `<button type="button" class="delete btn btn-danger" id="delete" data-value="${movie.id.toString()}">Delete</button>`
                htmlStr += `<button type="button" class="save btn btn-secondary" id="save" data-value="${movie.id.toString()}">Save</button><br>`
                htmlStr += `</div>`
                htmlStr += `<button type="button" class="hide btn btn-secondary" id="hide">Hide</button>`
                htmlStr += `</div>`
                htmlStr += `</div>`
            }

            $("#main").html(htmlStr);
        })
        .then(function (){
            $('.delete').click(function (){
                var movieTagAttr = $(this).attr("data-value");
                let deleteMovie = {
                    method : 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    }
                };
                let inputVal = $('#movie-id-delete').val();
                fetch(`https://efficient-wholesale-pediatrician.glitch.me/movies/${movieTagAttr}`, deleteMovie)
                    .then(getMovies)
            })
            // console.log("Something happened!")
            $('.save').click(function (){
                // alert("Something happened here")

                let editThis = {
                    "title":$(this).parent(".editCard").children(".editTitle").text(),
                    "poster" : $(this).parent(".editCard").children(".editPoster").text(),
                    "year":$(this).parent(".editCard").children(".editYear").text(),
                    "director":$(this).parent(".editCard").children(".editDirector").text(),
                    "rating":$(this).parent(".editCard").children(".editRating").text(),
                    "plot": $(this).parent(".editCard").children(".editPlot").text(),
                    "actors":$(this).parent(".editCard").children(".editActors").text()

                }
                // console.log(editThis+"working here");

                let patchOptions = {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(editThis)
                };

                let editMovieinputVal = $(this).attr("data-value");
                console.log('editThis'+editThis);
                fetch(`https://efficient-wholesale-pediatrician.glitch.me/movies/${editMovieinputVal}`, patchOptions).then(getMovies)
            });
            $(".hide").click(function(){
                alert("clicked 1");
                $(".editCard").toggle(1000);
                alert("CLICKED 2")
            })
        })
}
getMovies()



// taking the user input and saving to JSON glitch DB
$('#post').click ((e) => {
    e.preventDefault()
    let newMovie = {
        "title" : $('#title').val(),
        "rating" : $('#rating').val(),
        "poster" : $("#poster").val(),
        "year" : $('#year').val(),
        "genre" : $('#genre').val(),
        "director":$('#director').val(),
        "plot" : $('#plot').val(),
        "actors" : $('#actors').val(),
    };
    const post = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
    };
    fetch("https://efficient-wholesale-pediatrician.glitch.me/movies",post )
        // .then(resp => resp.json())
        .then(getMovies)
    console.log(newMovie)
});





// add a movie toggle for show ana hide //

$(document).ready(function(){
    $(".btn").click(function(){
        $("#content1").toggle(1000);

    });
});

