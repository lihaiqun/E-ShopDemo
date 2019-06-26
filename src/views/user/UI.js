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
              <img src = {require("@/images/user/avater.png")} alt = "" />
              <span>桃夭</span>
            </div>
            <div className = "setting">
              <img src = {require("@/images/user/setting.png")} alt = "" />
            </div>
          </div>
          <ul className = "likeAttention">
            <li><i><img src = {require("@/images/user/heart.png")} alt = "" /></i><p>我的喜欢</p></li>
            <li><i><img src = {require("@/images/user/star.png")} alt = "" /></i><p>我的关注</p></li>
            <li><i><img src = {require("@/images/user/right.png")} alt = "" /></i><p>签到</p></li>
          </ul>
        </header>
        <div className = "content">
          <div className = "myOrder">
            <p>我的订单</p>
            <div className = "allOrder"><span>全部订单</span><i><img src = {require("@/images/user/row.png")} alt = "" /></i></div>
          </div>
          <ul className = "pay">
            <li><i><img src = {require("@/images/user/unpay.png")} alt = "" /></i><p>待付款</p></li>
            <li><i><img src = {require("@/images/user/payed.png")} alt = "" /></i><p>待发货</p></li>
            <li><i><img src = {require("@/images/user/unevaluate.png")} alt = "" /></i><p>待评价</p></li>
            <li><i><img src = {require("@/images/user/refund.png")} alt = "" /></i><p>售后/退款</p></li>
          </ul>
          <ul className = "couponList">
            <Link to = "/users/myCoupon"><i><img src = {require("@/images/user/coupont.png")} alt = "" /></i><span>我的优惠券</span><b><img src = {require("@/images/user/row.png")} alt = "" /></b></Link>
            <Link to = "/users/myReward"><i><img src = {require("@/images/user/reward.png")} alt = "" /></i><span>推荐奖励</span><b><img src = {require("@/images/user/row.png")} alt = "" /></b></Link>
            <Link to = "/users/myFootprint"><i><img src = {require("@/images/user/footprint.png")} alt = "" /></i><span>我的足迹</span><b><img src = {require("@/images/user/row.png")} alt = "" /></b></Link>
            <Link to = "/users/myService"><i><img src = {require("@/images/user/service.png")} alt = "" /></i><span>在线客服</span><b><img src = {require("@/images/user/row.png")} alt = "" /></b></Link>
          </ul>
        </div>
      </div>
    )
  }
}

export default Com;
