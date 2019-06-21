import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '@/views/home/Home'
import Find from '@/views/find/Find'
import Fashion from '@/views/fashion/Fashion'
import User from '@/views/user/User'
import Footer from '@/components/common/footer.js'
const Main = () => (
  <div className="container">
    <Switch>
      <Route path='/home' component={Home}/>
      <Route path='/find' component={Find}/>
      <Route path='/fashion' component={Fashion}/>
      <Route path='/user' component={User}/>
      <Redirect to='/home' />
    </Switch>
    <Footer />
  </div>
)
export default Main