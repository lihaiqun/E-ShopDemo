import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from '@/layout/main'
import '@/css/gobal.scss'
const App = () => (
  <Switch>
    {/* <Route path='/others'></Route> */}
    <Route path='/' component={Main}></Route>
  </Switch>
)
export default App