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