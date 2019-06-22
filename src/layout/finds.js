import React from 'react'
import { Route, Switch } from 'react-router-dom';
import FindCheck from '@/views/find/findCheck';
import FindCheckStyleDetail from '@/views/find/findCheckStyleDetail';
import FindCheckTypeDetail from '@/views/find/findCheckTypeDetail';
import '@/css/find/total.scss';

const Main = () => (
  <Switch>
    <Route path = "/finds/check/style/:name" component = { FindCheckStyleDetail }/>
    <Route path = "/finds/check/type/:name" component = { FindCheckTypeDetail }/>
    <Route path = "/finds/check" component = { FindCheck }/>
  </Switch>
)
export default Main