import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" />
    </Switch>
  </BrowserRouter>
);

export default Root;
