import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ReviewList from './ReviewList';

const Movie = () => {
  const { id } = useParams();
  const movie = useLoaderData();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`http://localhost:8080/movies/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }
        const data = await response.json();
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovie();
  }, [id]);

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
