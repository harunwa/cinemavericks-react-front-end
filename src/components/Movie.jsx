import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ReviewList from './ReviewList';

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
          <ReviewList reviews={movie.reviews}/>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Movie;
