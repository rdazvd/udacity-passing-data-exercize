import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/


		  const likedMovies = profiles.map(
          	profile => {
           	 const userName = users[profile.userID].name
			 const movieName = movies[profile.favoriteMovieID].name;
             return <li>{userName}'s favorite movie is {movieName}</li>;
			})}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>How Popular is Your Favorite Movie?</h2>
		<ul>
		  {for (movie in movies) {
            
          }}
		</ul>
      </div>
    );
  }
}

export default App;
