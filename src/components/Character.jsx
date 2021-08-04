import React from 'react';
import PropTypes from 'prop-types';

export default function Character({ name }) {
  return (
    <div>
      <p>{name}</p>    
    </div>
  );
}
Character.propTypes = {
  name: PropTypes.string.isRequired
};
