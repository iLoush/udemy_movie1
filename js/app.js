const numberOfMovies = +prompt("How many movies have you benn watching already?", "");

// create object
const personalMovieDB = {
   count: numberOfMovies,
   movies: {},
   actors: {},
   genres: [],
   private: false
};

const a = prompt("Your last movie?", ""),
   b = prompt("Rate it", ""),
   c = prompt("Your last movie?", ""),
   d = prompt("Rate it", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);