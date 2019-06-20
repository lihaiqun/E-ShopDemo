import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
function App() {
  return (
    <div className = "container">
      <Switch>
        <Route path = '/user' component = { User } />
        <Redirect to = "/home"/>
      </Switch>
    </div>
  );
}

export default App;
