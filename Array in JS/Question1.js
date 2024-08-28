//create an array of your top 5 favorite movies. Add a new movie to the end of the array, remove the first movie, and replace the third movie with a new title. Display the updated array.


let favoriteMovies = ["JurassicPark", "The Matrix", "Interstellar", "The Dark Knight", "IronMan"];

favoriteMovies.push("Avenger");

favoriteMovies.shift();

favoriteMovies[2] = "FastAndFurious8";

console.log(favoriteMovies);
