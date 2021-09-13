import React from 'react';
import AppContent from './components/AppContent';
import './App.css';

function App() {

  function handleSearch(e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
  }
  return (
    <div className="app">
      <AppContent handleSearch={handleSearch}/>
    </div>
  );
}

export default App;
