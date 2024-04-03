import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Movie = () => {

const movie = useLoaderData();


  return (
    <div>
      {movie ? (
        <div>
          <h2>{movie.title}</h2>
          <p>Duration: {movie.duration} minutes</p>
          <p>Director: {movie.director}</p>
          <p>Genre: {movie.genres.map(genre => genre.genreEnum).join(', ')}</p>
          <p>Release Year: {movie.year}</p>
        </div>
        
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Movie;

