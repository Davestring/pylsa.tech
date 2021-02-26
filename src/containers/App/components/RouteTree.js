import React from 'react';

import { Route, Switch } from 'react-router-dom';

import ContactPage from 'containers/ContactPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PortfolioPage from 'containers/PortfolioPage/Loadable';

function RouteTree() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/portfolio/:system" component={PortfolioPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default RouteTree;
