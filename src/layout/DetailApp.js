import React from 'react';
import Detail from '@/views/detail';
import { Switch, Route } from 'react-router-dom';
import "@/main.scss";
function DetailApp () {
  return (
    <Switch>
      <Route path = "/detail/:id" component = {Detail}></Route>
    </Switch>
  )
}
export default DetailApp;