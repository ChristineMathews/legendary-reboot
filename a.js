import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Component1 from './Component1';
import Component2 from './Component2';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/some-path"
          render={() => (
            <div>
              <Component1 />
              <Component2 />
            </div>
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
