import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Home.css';
import { reloadPostITs } from '../../Redux/postITsSlice';
import Posts from '../PostITs';
import Header from '../Header/index';

export const Home = () => {
  const { posts } = useSelector((state) => state.postITs);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-postits-app-data'));

    if (savedNotes) {
      savedNotes.forEach((element) => {
        dispatch(reloadPostITs(element));
      });
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('react-postits-app-data', JSON.stringify(posts));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }, [posts]);
  return (
    <div className="Home">
      <header className="Home-header">
        <div className="container">
          <Header />
          <Posts />
        </div>
      </header>
    </div>
  );
};

export default Home;
