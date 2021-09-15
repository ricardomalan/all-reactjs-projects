import React from 'react';
import PropTypes from 'prop-types';

function Search({ isDisabled, handleSearch }) {
  return (
    <div className='search'>
      <input
        type='search'
        placeholder='Digite o nome do usuário no GitHub'
        disabled={isDisabled}
        onKeyUp={handleSearch}
      />
    </div>
  )
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search