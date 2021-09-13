import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';

import logoGithubUser from '../assets/images/githubUser.png';

const AppContent = ({
  userinfo,
  repos,
  starred,
  isFetching = false,
  handleSearch,
  getRepos,
  getStarred
}) => (
  <div className='appContent'>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching ? <div>Carregando...</div> : <div><img src={logoGithubUser} alt="logo github user" /></div>}
  </div>
)

AppContent.propTypes = {
    handleSearch: PropTypes.func.isRequired,
}
export default AppContent