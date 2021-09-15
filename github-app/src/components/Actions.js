import React from 'react';
import PropTypes from 'prop-types';

function Actions({ getRepos, getStarred }) {
  return (
    <div className='actions'>
      <button onClick={getRepos}>Ver repositórios</button>
      <button onClick={getStarred}>Ver favoritos</button>
    </div>
  )
}
  
Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default Actions
