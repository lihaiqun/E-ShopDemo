import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => (
  <footer>
  <ul>
    <li>
      <NavLink to='/home'>
        <span className="iconfont icon-shouye"></span>
        <p>首页</p>
      </NavLink>
    </li>
    <li>
      <NavLink to='/find'>
        <span className="iconfont icon-gejuyuan"></span>
        <p>发现</p>
      </NavLink>
    </li>
    <li>
      <NavLink to='/fashion'>
        <span className="iconfont icon-piaojia"></span>
        <p>时尚</p>
      </NavLink>
    </li>
    <li>
      <NavLink to='/user'>
      	<span className="iconfont icon-iconfuzhi"></span>
      	<p>我</p>
      </NavLink>
    </li>
  </ul>
</footer>
)
export default Footer