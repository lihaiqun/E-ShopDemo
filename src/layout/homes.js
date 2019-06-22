import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Accessories from '@/views/accessories/Accessories'
const Main = () => (
  <div className="container">
    <Switch>
      <Route path='/homes/accessories'  component = {Accessories} />
    </Switch>
  </div>
)
export default Main