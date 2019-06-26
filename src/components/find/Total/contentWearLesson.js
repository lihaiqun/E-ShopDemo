// 穿搭教程
import React from 'react';


export default () => (
  <div className = "find_content-wearLesson">
    <h4>穿搭教程</h4>
    <ul>
      <li>
        <a href = "##">
          <p>韩系</p>
          <img src={require("@/images/find/test-pic3.png")} alt = ""/>
        </a>
      </li>
      <li>
        <a href = "##">
          <p>欧美风</p>
          <img src={require("@/images/find/test-pic4.png")} alt = ""/>
        </a>
      </li>
      <li>
        <a href = "##">
          <p>民族风</p>
          <img src={require("@/images/find/test-pic5.png")} alt = ""/>
        </a>
      </li>
      <li>
        <a href = "##">
          <p>森系</p>
          <img src={require("@/images/find/test-pic6.png")} alt = ""/>
        </a>
      </li>
    </ul>
  </div>
)