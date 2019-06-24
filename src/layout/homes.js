import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Accessories from '@/views/accessories/Accessories'
import Hotsale from '@/views/hotsale/Hotsale'
const Main = () => (
  <div className="container">
    <Switch>
      <Route path='/homes/accessories'  component = {Accessories} />
      <Route path='/homes/hotsale'  component = {Hotsale} />
    </Switch>
  </div>
)
export default Main