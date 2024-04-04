import React, { useState } from "react";
import MovieList from "./MovieList";
import { useParams } from "react-router-dom";
import '../css/Movies.css'

const Movies = ({movies}) => {

    const {userId} = useParams();

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
    <div className="browse-section">
        <h2 className="browse-text">Browse by</h2>
        <div className="filter-container">
            <label htmlFor="genre-filter" className="filter-label">Genre: </label>
            <select id="genre-filter" value={genreFilter} onChange={handleGenreChange} className="filter-select">
                <option value="">All genres</option>
                {movies
                    .map(movie => movie.genres.map(genre => genre.genreEnum))
                    .flat()
                    .filter((genre, index, self) => self.indexOf(genre) === index)
                    .map(genre => (
                        <option key={genre} value={genre}>{genre}</option>
                    ))}
            </select>

            <label htmlFor="duration-filter" className="filter-label">Minimum Duration:</label>
            <input
                type="number"
                id="duration-filter"
                value={minDuration}
                onChange={handleDurationChange}
                min={0}
                className="filter-input"
            />

            <label htmlFor="rating-filter" className="filter-label">Minimum Rating:</label>
            <input
                type="number"
                id="rating-filter"
                value={minRating}
                onChange={handleRatingChange}
                min="0"
                max="5"
                className="filter-input"
            />
        </div>

        <h2 className="movies-heading">Movies</h2>
        <MovieList listOfMovies={filteredMovies} userId={userId} />
    </div>
);


}
 
export default Movies;