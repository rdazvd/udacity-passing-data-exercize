import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {profiles, users, movies} from './_data';
import MovieList from './MovieList';

/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/
const movieTitles = Object.keys(movies).map(movie => movies[movie].name);
const favoritedMovies = profiles.map(profile => {
  const userName = users[profile.userID].name
  const movieName = movies[profile.favoriteMovieID].name;
  return {userName, movieName};
});

console.log(favoritedMovies);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <MovieList movieTitles={movieTitles} favoritedMovies={favoritedMovies} />
      </div>
    );
  }
}

export default App;
