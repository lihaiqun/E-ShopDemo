import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
function App() {
  return (
    <div className = "container">
      <Switch>
        <Route path = '/cart' component = { Cart } />
        <Route path = '/user' component = { User } />
        <Redirect to = "/home"/>
      </Switch>

    </div>
    // dasfw 
  );
}

export default App;
