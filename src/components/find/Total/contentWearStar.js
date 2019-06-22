import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

export default () => (
  <div className = "find_content-wearStar">
    <h4>明星搭配</h4>
    <WingBlank>
    <Carousel className="space-carousel"
      frameOverflow="visible"
      cellSpacing={26}
      dots={false}
      infinite
    >
      <div>
      <img href="##" alt = "这是图片1" />
      <p>韩系</p>
      </div>
      <div>
      <img href="##" alt = "这是图片2" />
      <p>BL</p>
      </div>
      <div>
      <img href="##" alt = "这是图片3" />
      <p>韩系</p>
      </div>
      <div>
      <img href="##" alt = "这是图片4" />
      <p>成熟</p>
      </div>
    </Carousel>
    </WingBlank>
  </div>
)