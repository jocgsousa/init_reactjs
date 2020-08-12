import React from 'react';

import PropTypes from 'prop-types';


function ThecItem({ tech, onDelete }){

  return (


    <li key={tech}>
    {tech}
    <button type="button" onClick={onDelete}>Remover</button>
    </li>


  );
}

ThecItem.defaultProps = {
  tech: 'Oculto',
};

ThecItem.propTypes = {
  tech: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ThecItem;