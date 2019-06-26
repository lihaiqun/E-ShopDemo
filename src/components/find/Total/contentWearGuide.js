// 今日穿搭指南
import React from 'react';
export default () => (
  <div className = "find_content-wearGuide">
    <h4>
      <span>今日穿搭指南</span>
      <b>
        <i style = {{
          background: `url(${ require('@/images/find/findAddress.png') }) no-repeat center`
        }}>
        </i>
        上海
      </b>
    </h4>

    <ul>
      <li>
        <div className = "learn">
          <img src={require("@/images/find/test-pic.png")} alt = "这是图片" />
          <a href = "##">了解详情</a>
        </div>
      </li>
      <li>
        <div className = "learn">
          <img src={require("@/images/find/test-pic2.png")} alt = "这是图片" />
          <a href = "##">了解详情</a>
        </div>
      </li>
    </ul>
    <div className = "weather">
      今天
      <i style = {{
      background: `url(${ require('@/images/find/sun.png') }) no-repeat center`
    }}></i>
      <span>9/21℃</span>
    </div>
    <div className = "line"></div>
  </div>
)