import React from 'react';

const UsersWhoFavorited = ({list}) => (
  <ul>
    {list.map(user => <li key={user}>{user}</li>)}
  </ul>
);

export default UsersWhoFavorited;