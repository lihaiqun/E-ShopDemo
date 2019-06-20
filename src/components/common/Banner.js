import React from 'react';
import { Carousel } from 'antd-mobile';

const Com = ({ bannerlist }) =>(
  <Carousel
  autoplay = { true }
  infinite
  >
  {bannerlist.map((item, index) => (
    <a
      key={index}
      href="/data/user/banner"
      style={{ display: 'inline-block', width: '100%', height: 176 }}
    >
      <img
        src={ "http://www.daxunxun.com" + item }
        alt=""
        style={{ width: '100%', verticalAlign: 'top', height: 176 }}
      />
    </a>
  ))}
  </Carousel>
)
export default Com;