import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Home.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { reloadPostITs } from '../../Redux/postITsSlice';
import Tab from '../ChangeTab/index';
import PostsComponent from '../PostITs/index';
import TrashComponent from '../TrashBin/index';
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
          <Tab />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={PostsComponent}><PostsComponent /></Route>
              <Route exact path="/TrashBin" component={TrashComponent}><TrashComponent /></Route>
            </Switch>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
};

export default Home;
