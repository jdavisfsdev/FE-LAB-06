import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Image from '../../container/Image';
import Main from '../../container/Main';


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
