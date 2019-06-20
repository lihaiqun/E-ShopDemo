import React from 'react';
import Coupon from '@/views/coupon'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
function App() {
  return (
    <div className = "container">
      <Switch>
        <Route path = '/coupon' component = { Coupon } />
        <Redirect to = "/coupon"/>
      </Switch>
    </div>
  );
}

export default App;
