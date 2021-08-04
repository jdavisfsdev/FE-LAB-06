import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Character from './Character';

export default function List({ characters }) {
  return (
    <ul data-testid="ul">
      {characters.map((character) => (
        <li key={character._id}> <Link to={`/${character._id}`}>
          <Character {...character} />
        </Link>
        </li>
      ))}
    </ul>
  );
}

Character.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }))
};
