import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import UserInfo from './UserInfo';
import Actions from './Actions';
import Repos from './Repos';

import logoGithubUser from '../assets/images/githubUser.png';

function AppContent({
  userInfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  getRepos,
  getStarred
}) {
  return (
    <div className='appContent'>
      <Search isDisabled={isFetching} handleSearch={handleSearch} />
      {isFetching ? <div>Carregando...</div> : !userInfo && <div><img src={logoGithubUser} alt="logo github user" /></div>}
      {!!userInfo && !isFetching && <UserInfo userInfo={userInfo} />}
      {!!userInfo && !isFetching && <Actions getRepos={getRepos} getStarred={getStarred} />}

      {!isFetching 
        && <div className='reposEStarreds'>
          {!!repos.length &&
            <Repos
            className='repos'
            title='Repositórios:'
            repos={repos}
            />
          }

          {!!starred.length &&
            <Repos
            className='starred'
            title='Favoritos:'
            repos={starred}
            />
          }
        </div>
      }
    </div>
  )
}

AppContent.propTypes = {
  userInfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default AppContent