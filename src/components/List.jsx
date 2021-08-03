import React from 'react';
import Character from './Character';

export default function List({ characters }) {
  return (
    <ul>
      {characters.map((character) => (
        <li key={character._id}>
          <Character {...character} />
        </li>
      ))}
    </ul>
  );
}
