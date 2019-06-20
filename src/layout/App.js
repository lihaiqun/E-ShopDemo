import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
function App() {
  return (
    <div className = "container">
      <Switch>
        <Route path = '/cart' component = { Cart } />
        <Route path = '/user' component = { User } />
        <Redirect to = "/home"/>
      </Switch>
      <footer className = "footer">
        <ul>
          <NavLink to = "/home">
            <span>加的水电费是的是浮点数</span>
            <p>首页11111111</p>
          </NavLink>
          <NavLink to = "/kind">
            <span></span>
            <p>分类</p>
          </NavLink>
          <NavLink to = "/cart">
            <span></span>
            <p>购物车</p>
          </NavLink>
          <NavLink to = "/user">
            <span></span>
            <p>我的</p>
          </NavLink>
        </ul>
      </footer>
    </div>
  );
}

export default App;
