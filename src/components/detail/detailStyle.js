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
    const { detailStyleProps: {
      detailStyleColor,
      detailStyleSize
    } } = this.props
  return(
    <QueueAnim
    animConfig={[
      { opacity: [1, 0], translateY: [0, 50] },
      { opacity: [1, 0], translateY: [0, -50] }
    ]}
    >
      <div className = "detail_main-detailstyle" key = "detailStyle">
      <div className = "other" onClick = { () => { this.props.detailStyleProps.changeDetailStyleFlag() } }></div>
        <div className = "detailstyle">
          <div className = "top">
            <i className = "cancel" onClick = { () => { this.props.detailStyleProps.changeDetailStyleFlag() } }></i>
          </div>
          <div className = "main">
            <div className = "main_top">
              {/* <img src = "###" alt = "图片来呦" /> */}
              {/* 记得修改样式 */}
              <div className="img">图片快来了呦</div>
              <div className = "main_top-Specifications">
                <h4>￥<span>159</span>.00</h4>
                {
                  detailStyleColor || detailStyleSize ? 
                  <h5>已选：<span>{detailStyleColor}</span><span>{detailStyleSize}</span></h5>
                  : <h5>请选择颜色和尺码</h5>
                }
              </div>
            </div>
            <div className = "main_center">
              <div className = "main_center-style">
                <p>颜色</p>
                <ul ref = "color">
                  <li onClick = { (e) => { 
                    for(let i = 0; i < this.refs.color.children.length; i++) {
                      this.refs.color.children[i].className = ""
                    }
                    e.target.className = "active";
                    this.props.detailStyleProps.setDetailStyleColor(e.target.innerHTML)
                  }}>
                    念香粉
                  </li>
                  <li onClick = { (e) => { 
                    for(let i = 0; i < this.refs.color.children.length; i++) {
                      this.refs.color.children[i].className = ""
                    }
                    e.target.className = "active";
                    this.props.detailStyleProps.setDetailStyleColor(e.target.innerHTML)
                  }}>
                    白色
                  </li>
                  <li onClick = { (e) => { 
                    for(let i = 0; i < this.refs.color.children.length; i++) {
                      this.refs.color.children[i].className = ""
                    }
                    e.target.className = "active";
                    this.props.detailStyleProps.setDetailStyleColor(e.target.innerHTML)
                  }}>
                    黑色
                  </li>
                </ul>
              </div>
              <div className = "main_center-style">
                <p>尺码</p>
                <ul ref = "size">
                  <li onClick = { (e) => { 
                    for(let i = 0; i < this.refs.size.children.length; i++) {
                      this.refs.size.children[i].className = ""
                    }
                    e.target.className = "active";
                    this.props.detailStyleProps.setDetailStyleSize(e.target.innerHTML)
                  }}
                  >
                    155/72A/XS
                  </li>
                  <li onClick = { (e) => { 
                    for(let i = 0; i < this.refs.size.children.length; i++) {
                      this.refs.size.children[i].className = ""
                    }
                    e.target.className = "active";
                    this.props.detailStyleProps.setDetailStyleSize(e.target.innerHTML)
                  }}
                  >
                    160/80A/S
                  </li>
                  <li onClick = { (e) => { 
                    for(let i = 0; i < this.refs.size.children.length; i++) {
                      this.refs.size.children[i].className = ""
                    }
                    e.target.className = "active";
                    this.props.detailStyleProps.setDetailStyleSize(e.target.innerHTML)
                  }}
                  >
                    170/88A/L
                  </li>
                  <li onClick = { (e) => { 
                    for(let i = 0; i < this.refs.size.children.length; i++) {
                      this.refs.size.children[i].className = ""
                    }
                    e.target.className = "active";
                    this.props.detailStyleProps.setDetailStyleSize(e.target.innerHTML)
                  }}
                  >
                    165/84A/M
                  </li>
                  <li onClick = { (e) => { 
                    for(let i = 0; i < this.refs.size.children.length; i++) {
                      this.refs.size.children[i].className = ""
                    }
                    e.target.className = "active";
                    this.props.detailStyleProps.setDetailStyleSize(e.target.innerHTML)
                  }}
                  >
                    175/92A/XL
                  </li>
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
              <button className = "main_bottom-addCart"  onClick = { () => { this.props.detailStyleProps.changeDetailStyleFlag() } }>加入购物车</button>
              <button className = "main_bottom-buyNow"  onClick = { () => { this.props.detailStyleProps.changeDetailStyleFlag() } }>立即购买</button>
            </div>
          </div>
        </div>
      </div>
    </QueueAnim>
  )} 
}