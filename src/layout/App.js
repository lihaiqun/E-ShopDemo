import React from 'react';
import { Switch, Route, NavLink, Redirect} from 'react-router-dom';
import User from '@/views/user';
import Coupon from '@/views/coupon';
import '@/main.scss';

const Com = () => (
  <div className = "container">
    <Switch>
      <Route path = '/user' component = { User }></Route>
      <Route path = '/coupon' component = { Coupon }></Route>
      <Redirect to = '/coupon'></Redirect>
    </Switch>
  </div>
)

export default Com;
