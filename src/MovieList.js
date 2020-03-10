import React from 'react';
import MovieDetails from './MovieDetails';

const MovieList = ({movieTitles, favoritedMovies}) => (
  <div>
    { movieTitles.map(title => (
      <h2>{title}</h2>
    ))}
  </div>
);

export default MovieList;