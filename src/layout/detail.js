import React from 'react';
import detail from '@/views/detail/index';
import { Route } from 'react-router-dom';

export default class Com extends React.Component {
  
  render () {
    return (
      <Route path = "/detail/:id" component = { detail }/>
    )
  }
}
