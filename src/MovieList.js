import React from 'react';
import MovieDetails from './MovieDetails';

const MovieList = ({movieTitles, favoritedMovies}) => {
  return (
    <ul>
      { movieTitles.map(title => {
          const usersWhoFavorited = favoritedMovies
            .filter(movie => movie.movieName === title)
            .map(movie => movie.userName);
  
          return (
            <MovieDetails key={title} title={title} usersWhoFavorited={usersWhoFavorited} />
          );
      })}
    </ul>
  );
};

export default MovieList;