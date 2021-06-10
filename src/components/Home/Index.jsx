import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Home.css';
import { addPostIT } from '../../Redux/postITsSlice';
import Posts from '../PostITs';

export const Home = () => {
  const { posts } = useSelector((state) => state.postITs);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      localStorage.setItem('react-postits-app-data', JSON.stringify(posts));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }, [posts]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-postits-app-data'));

    if (savedNotes) {
      savedNotes.forEach((element) => {
        dispatch(addPostIT(element, 1));
      });
    }
  }, []);
  return (
    <div className="Home">
      <header className="Home-header">
        <div className="container">
          <Posts />
        </div>
      </header>
    </div>
  );
};

export default Home;
