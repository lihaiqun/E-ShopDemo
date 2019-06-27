import React from 'react';
import '@/css/user.scss';
import {Link} from 'react-router-dom';
class Com extends React.Component {
  componentDidMount () {

  }
  render () {
    return (
      <div id = "user">
        <header className = "header">
          <div className = "logSetting">
            <div className = "logRes">
              <img src = '' alt = "" />
            </div>
            <div className = "setting">设置</div>
          </div>
          <ul className = "likeAttention">
            <li><i></i><p>我的喜欢</p></li>
            <li><i></i><p>我的关注</p></li>
            <li><i></i><p>签到</p></li>
          </ul>
        </header>
        <div className = "content">
          <div className = "myOrder">
            <i></i><p>我的订单</p>
          </div>
          <ul className = "pay">
            <li><i></i><p>待付款</p></li>
            <li><i></i><p>待发货</p></li>
            <li><i></i><p>待收货</p></li>
            <li><i></i><p>待评价</p></li>
            <li><i></i><p>售后</p></li>
          </ul>
          <ul className = "couponList">
            <Link to = "/users/myCoupon"><i></i><span>我的优惠券</span><b></b></Link>
            <Link to = "/users/myReward"><i></i><span>推荐奖励</span><b></b></Link>
            <Link to = "/users/myFootprint"><i></i><span>我的足迹</span><b></b></Link>
            <Link to = "/users/myService"><i></i><span>在线客服</span><b></b></Link>
          </ul>
        </div>
      </div>
    )
  }
}

export default Com;
