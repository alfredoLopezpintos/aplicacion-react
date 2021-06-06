import React from 'react';
import { useDispatch } from 'react-redux';
import logo from '../../logo.svg';
import './Home.css';
import { testLog } from '../../Redux/testSlice';

function Home() {
  const dispatch = useDispatch();
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Edit
          <code>src/Home.js</code>
          and save to reload.
        </p>
        <p> PRUEBA </p>
        <button
          type="button"
          onClick={() => dispatch(testLog())}
        >
          Add PostIT
        </button>
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
