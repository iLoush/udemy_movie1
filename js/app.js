"use strict";

const numberOfMovies = +prompt("How many movies have you benn watching already?", "");

// create object
const personalMovieDB = {
   count: numberOfMovies,
   movies: {},
   actors: {},
   genres: [],
   private: false
};

// loop 
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

if (personalMovieDB.count < 10) {
   console.log("Not too much");
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
   console.log("Wow!");
} else if (personalMovieDB.count >= 30) {
   console.log("you are crazy, man!");
} else {
   console.log("there is a mistake");
}

console.log(personalMovieDB);