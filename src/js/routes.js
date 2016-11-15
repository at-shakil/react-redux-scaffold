import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';
import App from './components/App';
import NotFoundView from './views/NotFoundView';
import { Session, DemoComponent } from './containers';
import Path from './config/paths.json';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Session} />
    <Route path={Path.demoPath} component={DemoComponent} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
