import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Home.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { reloadPostITs } from '../../Redux/postITsSlice';
import PostsComponent from '../PostITs/index';
import TrashComponent from '../TrashBin/index';
import HeaderComponent from '../Header/index';

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
    <Router>
      <div className="Home">
        <header className="Home-header">
          <div className="container">
            <HeaderComponent />
            <Switch>
              <Route path="/" exact component={PostsComponent} />
              <Route path="/TrashBin" component={TrashComponent} />
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
};

export default Home;
