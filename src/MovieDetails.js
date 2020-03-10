import React from 'react';
import UsersWhoFavorited from './UsersWhoFavorited';

const MovieDetails = ({title, usersWhoFavorited}) => (
  <li>
    <h2>{title}</h2>
    { usersWhoFavorited.length ? 
      ( 
        <div>
          <p>Liked By</p>
          <UsersWhoFavorited list={usersWhoFavorited} />
        </div>
      ) :
      <p>None of the current users liked this movie</p>
    }
  </li>
);

export default MovieDetails;