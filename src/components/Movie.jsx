import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Movie = () => {

const movie = useLoaderData();

  return (
    <div>
      {movie ? (
        <div>
          <h2>{movie.title}</h2>
          <p>Duration: {movie.duration} minutes</p>
          <p>Director: {movie.director}</p>
          <p>Genre: {movie.genre}</p>
          <p>Release Year: {movie.year}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Movie;
