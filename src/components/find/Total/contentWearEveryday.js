// 每天为你定制新的穿搭
import React from 'react';
import { Link } from 'react-router-dom'
export default () => (
  <div className = "find_content-wearEveryday">
    <h4><span>每天为你定制新的穿搭</span><b>重新测试</b></h4>
    <ul>
      <li>
        <a href = "##">
          <img href="##" alt = "这是图片" />
        </a>
        <em></em>
      </li>
      <li>
        <a href = "##">
          <img href="##" alt = "这是图片" />
        </a>
        <em></em>
      </li>
    </ul>
    <div className = "wearHandbook">
      <p><Link to = "/finds/check">穿搭手册</Link></p>
      <p>问穿搭</p>
    </div>
  </div>
)