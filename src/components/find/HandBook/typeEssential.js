import React from 'react';
import { Link } from 'react-router-dom';
export default () => {
  return (
    <div className = "essential">
      <h5>必备单品</h5>
      <ul>
        <li>
          <Link to = "/finds/single/高跟鞋">
            <img src = "##" alt = "我在等图片吖" />
            <p>高跟鞋</p>
          </Link>
        </li>
        <li>
          <Link to = "/finds/single/小黑裙">
            <img src = "##" alt = "我在等图片吖" />
            <p>小黑裙</p>
          </Link>
        </li>
        <li>
          <Link to = "/finds/single/一字领">
            <img src = "##" alt = "我在等图片吖" />
            <p>一字领</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}