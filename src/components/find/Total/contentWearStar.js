// 明星搭配
import React from 'react';

export default () => (
  <div className = "find_content-wearStar">
    <h4>明星搭配</h4>
    <ul>
      <li>
        <a href = "##">
          <img src={require("@/images/find/test-pic3.png")} alt = ""/>
          <p>
            <span>古力娜扎</span>
            <span>女神款</span>
          </p>
        </a>
      </li>
      <li>
        <a href = "##">
          <img src={require("@/images/find/test-pic4.png")} alt = ""/>
          <p>
            <span>欧阳娜娜</span>
            <span>细节范</span>
          </p>
        </a>
      </li>
      <li>
        <a href = "##">
          <img src={require("@/images/find/test-pic5.png")} alt = ""/>
          <p>
            <span>杨幂</span>
            <span>休闲范</span>
          </p>
        </a>
      </li>
    </ul>
  </div>
)