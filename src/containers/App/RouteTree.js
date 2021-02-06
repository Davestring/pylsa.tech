import React from 'react';

import { Route, Switch } from 'react-router';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

function RouteTree() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default RouteTree;
