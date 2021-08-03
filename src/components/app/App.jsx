import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../../container/Main';
import Image from '../Image';

export default function App() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact={true}>
          <Main />
        </Route>

        <Route path="/:_id">
          <Image />
        </Route>

      </Switch>
    </Router>
  );
}
