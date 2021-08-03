import React from 'react';
import { Link } from 'react-router-dom';
import Character from './Character';

export default function List({ characters }) {
  return (
    <ul>
      {characters.map((character) => (
        <li key={character._id}> <Link to={`/${character._id}`}>
          <Character {...character} />
        </Link>
        </li>
      ))}
    </ul>
  );
}
