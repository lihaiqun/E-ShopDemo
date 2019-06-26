// 为你私人定制
import React from 'react';
import { Link } from 'react-router-dom'
export default () => (
  <div className = "find_content-wearEveryday">
    <h4><span>为你私人定制</span><b>重新测试</b></h4>
    <ul>
      <li>
        <img src={require("@/images/find/test-pic2.png")} alt = "这是图片" />
        <a href = "##">了解详情</a>
      </li>
      <li>
        <img src={require("@/images/find/test-pic2.png")} alt = "这是图片" />
        <a href = "##">了解详情</a>
      </li>
    </ul>
    <div className = "wearHandbook">
      <p><Link to = "/finds/check">穿搭手册</Link></p>
      <p>问穿搭</p>
    </div>
  </div>
)