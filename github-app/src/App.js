import React, { useState } from 'react';
import ajax from '@fdaciuk/ajax';
import AppContent from './components/AppContent';
import './App.css';

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [repos, setRepos] = useState([]);
  const [starred, setStarred] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  function getGitHubApiUrl (username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  function handleSearch(e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    
    if (value === '' && keyCode === ENTER) {
      setUserInfo(null)
      setRepos([])
      setStarred([])
      setIsFetching(false)
      return
    }

    if (keyCode === ENTER) {
      setIsFetching(true)

      setTimeout(() => {
        ajax().get(getGitHubApiUrl(value))
        .then((result) => {
          setUserInfo({
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          })
          setRepos([])
          setStarred([])
        })
        .always(() => setIsFetching(false))
      }, 500)
    }
  }

  function getRepos (type) {
      const username = userInfo.login

      ajax()
      .get(getGitHubApiUrl(username, type))
      .then((result) => {
        if(type === 'repos') {
          result.map((repo) => setRepos(repos => [...repos, {
            name: repo.name,
            link: repo.html_url
          }]))
        } else {
          result.map((repo) => setStarred(starred => [...starred, {
            name: repo.name,
            link: repo.html_url
          }]))
        }
      })
  }

  return (
    <div className="app">
      <AppContent
        userInfo={userInfo}
        repos={repos}
        starred={starred}
        isFetching={isFetching}
        handleSearch={handleSearch}
        getRepos={() => getRepos('repos')}
        getStarred={() => getRepos('starred')}
      />
    </div>
  );
}

export default App;
