import React from 'react';
import { useDispatch } from 'react-redux';
import './Home.css';
import { testLog } from '../../Redux/testSlice';
import PostITs from '../PostITs';

function Home() {
  const dispatch = useDispatch();
  return (
    <div className="Home">
      <header className="Home-header">
        <div className="container">
          <PostITs />
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
}

export default Home;
