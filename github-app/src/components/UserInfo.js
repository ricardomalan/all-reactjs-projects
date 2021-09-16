import React from 'react';
import PropTypes from 'prop-types';

function UserInfo({ userInfo }) {
  return (
    <div className='userInfoStyle'>
      <img src={userInfo.photo} />

      <div>
        <h3>
          <a href={`https://github.com/${userInfo.login}`} target="_blank">
            {userInfo.username}
          </a>
        </h3>

        <ul className='reposInfoStyle'>
          <li>Repositórios: {userInfo.repos}</li>
          <li>Seguidores: {userInfo.followers}</li>
          <li>Seguindo: {userInfo.following}</li>
        </ul>
      </div>
    </div>
  )
}
  
UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserInfo