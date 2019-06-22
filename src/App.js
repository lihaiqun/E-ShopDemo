import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from '@/layout/main'
import Homes from '@/layout/homes'
import Finds from '@/layout/finds'
import Users from '@/layout/users'
import Fashions from '@/layout/fashions'
import '@/css/gobal.scss'
const App = () => (
  <Switch>
    <Route path='/homes' component={Homes}></Route>
    <Route path='/finds' component={Finds}></Route>
    <Route path='/users' component={Users}></Route>
    <Route path='/fashions' component={Fashions}></Route>
    <Route path='/' component={Main}></Route>
  </Switch>
)
export default App