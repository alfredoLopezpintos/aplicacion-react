import React from 'react';
import './Home.css';
import Posts from '../PostITs';

export const Home = () => (
  <div className="Home">
    <header className="Home-header">
      <div className="container">
        <Posts />
      </div>
    </header>
  </div>
);

export default Home;
