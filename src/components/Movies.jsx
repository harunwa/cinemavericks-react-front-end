import React, { useState } from "react";
import MovieList from "./MovieList";

const Movies = ({movies}) => {

    const [genreFilter, setGenreFilter] = useState("");
    const [minDuration, setMinDuration] = useState(0);
    const [minRating, setMinRating] = useState(0);

   const handleGenreChange = (event) => {
    setGenreFilter(event.target.value);
   };

   const handleDurationChange = (event) => {
    setMinDuration(parseInt(event.target.value));
   };

   const handleRatingChange = (event) => {
    setMinRating(parseInt(event.target.value));
   };

   const filteredMovies = movies.filter(movie => {
    if (genreFilter && movie.genres.map(genre => genre.genreEnum).includes(genreFilter)){
        return false;
    }

    if (minDuration && movie.duration < minDuration){
        return false;
    }

    if (minRating && movie.averageRating < minRating){
        return false;
    }
    return true;
   });
   




    return ( 
    <>
     
        <>
        <h2>Movies</h2>
        <MovieList listOfMovies={filteredMovies} />
        </>
    </>
);

}
 
export default Movies;