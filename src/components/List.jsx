import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Character from './Character';

export default function List({ characters }) {
  const characterList = characters.map((character) => (
    <li key={character._id}> <Link to={`/${character._id}`}>
      <Character
        _id={character._id}
        name={character.name}
        image={character.image} />
    </Link>
    </li>
  ));

  return (
    <ul>{characterList}</ul>
  );
}

List.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }))
};
