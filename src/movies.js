// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
let arr3 = moviesArray.map(ele =>{
         return ele.director
        })
return arr3
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   let count =0  
   let spilb = moviesArray.filter(ele =>{
      if(ele.director === 'Steven Spielberg' && ele.genre.includes('Drama')){
         count++ 
      }
   })
   return count 
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
   if(moviesArray.length===0){
      return 0
   }
   let prom = moviesArray.reduce((acc, ele)=>acc+=ele.score,0)
   let result = Math.round(prom/moviesArray.length,-2)
   return result
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
let copy = [...moviesArray]
   copy.sort((a, b)=>{
   return a.year - b.year
})
return copy

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
