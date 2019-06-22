import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

export default () => (
  <div className = "find_content-wearLesson">
    <h4>穿搭教程</h4>
    <WingBlank>
    <Carousel className="space-carousel"
      frameOverflow="visible"
      cellSpacing={27}
      dots={false}
      infinite
    >
      <div>
      <p>韩系</p>
      <img href="##" alt = "这是图片1" />
      </div>
      <div>
      <p>BL</p>
      <img href="##" alt = "这是图片2" />
      </div>
      <div>
      <p>韩系</p>
      <img href="##" alt = "这是图片3" />
      </div>
      <div>
      <p>成熟</p>
      <img href="##" alt = "这是图片4" />
      </div>
    </Carousel>
    </WingBlank>
  </div>
)