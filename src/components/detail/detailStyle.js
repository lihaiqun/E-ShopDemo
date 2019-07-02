// 类组件
import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Stepper } from 'antd-mobile';
// import { Link } from 'react-router-dom';

export default class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      val: 1
    };
  }
  onChange = (val) => {
    console.log(val);
    this.setState({ val });
  }
  componentDidMount () {
  }
  render () {
    console.log(this)

  return(
    <QueueAnim
    animConfig={[
      { opacity: [1, 0], translateY: [0, 50] },
      { opacity: [1, 0], translateY: [0, -50] }
    ]}
    >
      <div className = "detail_main-detailstyle" key = "detailStyle">
      <div className = "other" onClick = { () => { this.props.props.setDetailStyleFlag() } }></div>
        <div className = "detailstyle">
          <div className = "top">
            <i className = "cancel" onClick = { () => { this.props.props.setDetailStyleFlag() } }></i>
          </div>
          <div className = "main">
            <div className = "main_top">
              {/* <img src = "###" alt = "图片来呦" /> */}
              {/* 记得修改样式 */}
              <div className="img">图片快来了呦</div>
              <div className = "main_top-Specifications">
                <h4>￥<span>159</span>.00</h4>
                <h5>请选择颜色和尺码</h5>
              </div>
            </div>
            <div className = "main_center">
              <div className = "main_center-style">
                <p>颜色</p>
                <ul>
                  <li className = "active">念香粉</li>
                  <li>黑色</li>
                </ul>
              </div>
              <div className = "main_center-style">
                <p>尺码</p>
                <ul>
                  <li>155/72A/XS</li>
                  <li>160/80A/S</li>
                  <li>165/84A/M</li>
                  <li>170/88A/L</li>
                  <li>175/92A/XL</li>
                </ul>
              </div>
                <Stepper
                showNumber
                min={1}
                value={this.state.val}
                onChange={this.onChange}
              />
            </div>
            <div className = "main_bottom">
              <button className = "main_bottom-addCart">加入购物车</button>
              <button className = "main_bottom-buyNow">立即购买</button>
            </div>
          </div>
        </div>
      </div>
    </QueueAnim>
  )} 
}