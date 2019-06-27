import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Accessories from '@/views/accessories/Accessories'
import Hotsale from '@/views/hotsale/Hotsale'
import Custom from '@/views/custom/Custom'
import CustomBody from '@/views/custom-body/Custom-body'
const Main = () => (
  <div className="container">
    <Switch>
      <Route path='/homes/accessories'  component = {Accessories} />
      <Route path='/homes/hotsale'  component = {Hotsale} />
      <Route path='/homes/custom/body' component = {CustomBody} />
      <Route path='/homes/custom' component = {Custom} />
    </Switch>
  </div>
)
export default Main