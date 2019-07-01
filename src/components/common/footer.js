import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => (
  <footer>
  <ul>
    <li>
      <NavLink to='/home'>
        <span className="home-icon"></span>
        <p>首页</p>
      </NavLink>
    </li>
    <li>
      <NavLink to='/find'>
        <span className="find-icon"></span>
        <p>发现</p>
      </NavLink>
    </li>
    <li>
      <NavLink to='/fashion'>
        <span className="fashion-icon"></span>
        <p>时尚</p>
      </NavLink>
    </li>
    <li>
      <NavLink to='/user'>
      	<span className="user-icon"></span>
      	<p>我的</p>
      </NavLink>
    </li>
  </ul>
</footer>
)
export default Footer