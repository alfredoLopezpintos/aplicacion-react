import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeComponent from './components/Home/Index';
import TrashComponent from './components/TrashBin/index';

export const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/aplicacion-react" component={HomeComponent} />
      <Route path="/TrashBin" component={TrashComponent} />
    </Switch>
  </BrowserRouter>
);

export default Root;
