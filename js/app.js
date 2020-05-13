"use strict";

let numberOfMovies;

// function 
function start() {
   numberOfMovies = +prompt("How many movies have you been watching already?", "");

   while (numberOfMovies == "" || numberOfMovies == null || isNaN(numberOfMovies)) {
      numberOfMovies = +prompt("How many movies have you been watching already?", "");
   }
}
start();

// object
const personalMovieDB = {
   count: numberOfMovies,
   movies: {},
   actors: {},
   genres: [],
   private: false
};

// functions
function rememberMyMovies() {
   for (let i = 0; i < 2; i++) {
      const a = prompt("Your last movie?", ""),
         b = prompt("Rate it", "");
      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
         personalMovieDB.movies[a] = b;
         console.log("done");
      } else {
         console.log("error");
         i--;
      }
   }
}
rememberMyMovies();

function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
      console.log("Not too much");
   } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
      console.log("Wow!");
   } else if (personalMovieDB.count >= 30) {
      console.log("you are crazy, man!");
   } else {
      console.log("there is a mistake");
   }
}
detectPersonalLevel();

function showMyDB(hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   }
}
showMyDB(personalMovieDB.private);

function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Your fav genre is number ${i}`);
   }
}
writeYourGenres();