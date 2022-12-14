"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee coffee card shadow p-3 mb-5 bg-white rounded">';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault();
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function searchCoffees(e) {
    e.preventDefault();
    var selectedCoffees = coffeeSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name === selectedCoffees) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSelection = document.querySelector('#coffee-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
coffeeSelection.addEventListener('keyup', searchCoffees)


//
// "use strict";
//
// const moviesAPI = 'https://efficient-wholesale-pediatrician.glitch.me/movies';
//
// fetch(moviesAPI)
//     .then((response) => response.json())
//     .then((jsonData) => console.log(jsonData))
//
// // Get all the movies
// function getMovies() {
//     let movieArray = []
//     return fetch(moviesAPI).then((callJson) => callJson.json());
// }
//
// // Display the data
// fetch(moviesAPI)
//     .then((callForJson) => {
//         return callForJson.json();
//     }).then((movies) => {
//     movieArray = movies
//     console.log(movies[0])
//     for (let i = 0; i <= 13; i++) {
//         $('#movie').append(
//             "<div class='card col-lg-3 m-2 text-center'><h2 class='card-title'>" + movies[i].title + "</h2>"
//             + "<img class='img-fluid' src='" + movies[i].poster + "'>"
//             + "<p>" + "Rating: " + movies[i].rating + "</p>"
//             + "<p>" + "Genre: " + movies[i].genre + "</p>"
//             + "<button class='delete' data-id='" + i + "' type='button' class='btn' data-toggle='modal'>" + Edit Movie + 0
//     }
// })






