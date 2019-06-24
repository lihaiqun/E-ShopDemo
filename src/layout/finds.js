import React from 'react'
import { Route, Switch } from 'react-router-dom';
import FindCheck from '@/views/find/findCheck';
import FindCheckDetail from '@/views/find/findCheckDetail';
import FindSingle from '@/views/find/findSingle';
import '@/css/find/total.scss';

const Main = () => (
  <Switch>
    <Route path = "/finds/check/style/:name" component = { FindCheckDetail }/>
    <Route path = "/finds/check/type/:name" component = { FindCheckDetail }/>
    <Route path = "/finds/single/:name" component = { FindSingle }/>
    <Route path = "/finds/check" component = { FindCheck }/>
  </Switch>
)
export default Main