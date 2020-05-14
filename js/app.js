"use strict";

const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   private: false,
   start: () => {
      personalMovieDB.count = +prompt("How many movies have you been watching already?", "");

      while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = +prompt("How many movies have you been watching already?", "");
      }
   },

   rememberMyMovies: () => {
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
   },

   detectPersonalLevel: () => {
      if (personalMovieDB.count < 10) {
         console.log("Not too much");
      } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
         console.log("Wow!");
      } else if (personalMovieDB.count >= 30) {
         console.log("you are crazy, man!");
      } else {
         console.log("there is a mistake");
      }
   },

   showMyDB: (hidden) => {
      if (!hidden) {
         console.log(personalMovieDB);
      }
   },

   toggleVisibleMyDB: () => {
      if (personalMovieDB.private) {
         personalMovieDB.private = false;
      } else {
         personalMovieDB.private = true;
      }
   },

   writeYourGenres: () => {
      for (let i = 1; i <= 3; i++) {
         let genre = prompt(`Your fav genre is number ${i}`);

         if (genre === "" || genre === null) {
            console.log('There is a mistake');
            i--;
         } else {
            personalMovieDB.genres[i - 1] = genre;
         }
      }

      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Fav genre ${i +1} is ${item}`);
      });
   },

};