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
    if (genreFilter && !movie.genres.map(genre => genre.genreEnum).includes(genreFilter)){
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
        <h2>Browse by</h2>
        <label htmlFor="genre-filter">Genre: </label>
        <select id="genre-filter" value={genreFilter} onChange={handleGenreChange}>
            <option value="">All genres</option>
            {movies
                .map(movie => movie.genres.map(genre => genre.genreEnum))
                .flat()
                .filter((genre, index, self) => self.indexOf(genre) === index)
                .map(genre => (
                    <option key={genre} value={genre}>{genre}</option>
                ))}
        </select>

        <label htmlFor="duration-filter">Minimum Duration:</label>
        <input
            type="number"
            id="duration-filter"
            value={minDuration}
            onChange={handleDurationChange}
            min={0}
        />

        <label htmlFor="rating-filter">Minimum Rating:</label>
        <input
            type="number"
            id="rating-filter"
            value={minRating}
            onChange={handleRatingChange}
            min="0"
            max="5"
        />
        <>
        <h2>Movies</h2>
        <MovieList listOfMovies={filteredMovies} />
        </>
    </>
);

}
 
export default Movies;