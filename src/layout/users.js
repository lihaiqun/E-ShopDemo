import React from 'react'
import { Route, Switch } from 'react-router-dom'
import myCoupon from "@/views/user/myCoupon/Coupon";
import myReward from "@/views/user/myReward/Reward";
import myFootPrint from "@/views/user/myFootprint/Footprint";
import myService from "@/views/user/myService/Service";

const Main = () => (
  <div className="container">
    <Switch>
      <Route path = "/users/myCoupon" component = {myCoupon}></Route>
      <Route path = "/users/myReward" component = {myReward}></Route>
      <Route path = "/users/myFootPrint" component = {myFootPrint}></Route>
      <Route path = "/users/myService" component = {myService}></Route>
    </Switch>
  </div>
)
export default Main