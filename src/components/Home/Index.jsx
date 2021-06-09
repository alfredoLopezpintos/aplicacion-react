import React from 'react';
import { useDispatch } from 'react-redux';
import './Home.css';
import { testLog } from '../../Redux/testSlice';
import Posts from '../PostITs';

export const Home = () => {
  const dispatch = useDispatch();
  return (
    <div className="Home">
      <header className="Home-header">
        <div className="container">
          <Posts />
        </div>
        <button
          type="button"
          onClick={() => dispatch(testLog())}
        >
          Add PostIT
        </button>
      </header>
    </div>
  );
};

export default Home;
