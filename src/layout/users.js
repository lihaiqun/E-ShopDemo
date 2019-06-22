import React from 'react'
import myCoupon from "@/views/user/myCoupon/Coupon";
import { Route, Switch } from 'react-router-dom'
const Main = () => (
  <div className="container">
    <Switch>
      <Route path = "/users/myCoupon" component = {myCoupon}></Route>
    </Switch>
  </div>
)
export default Main