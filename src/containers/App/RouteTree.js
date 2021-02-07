import React from 'react';

import { Route, Switch } from 'react-router';

import AccessCtrlPage from 'containers/AccessCtrlPage/Loadable';
import CCTVPage from 'containers/CCTVPage/Loadable';
import FirePrevPage from 'containers/FirePrevPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import IPSPage from 'containers/IPSPage/Loadable';
import NetworksPage from 'containers/NetworksPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import RTCPage from 'containers/RTCPage/Loadable';

function RouteTree() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/access-ctrl-system" component={AccessCtrlPage} />
      <Route exact path="/cctv-system" component={CCTVPage}></Route>
      <Route exact path="/fire-prev-system" component={FirePrevPage}></Route>
      <Route exact path="/ips-system" component={IPSPage}></Route>
      <Route exact path="/networks-system" component={NetworksPage}></Route>
      <Route exact path="/rtc-system" component={RTCPage}></Route>
      <Route component={NotFoundPage}></Route>
    </Switch>
  );
}

export default RouteTree;
