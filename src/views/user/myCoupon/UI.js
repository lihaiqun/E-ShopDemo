import React from 'react';
class Com extends React.Component {
  componentDidMount () {
    
  }
  goBackUser () {
    this.props.history.go(-1)
  }
  render () {
    return (
      <div className = "user_coupon">
        <header className = "coupon_header">
          <i onClick = { this.goBackUser.bind(this) }>图标</i><span>我的优惠券</span><b>兑换码</b>
        </header>
        <div className = "user_content">
          <ul className = "user_offer">
            <li>全部</li>
            <li>店铺券</li>
            <li>平台券</li>
          </ul>
          <div className = "user_coupons">
            <img src = "" alt = ""/><p>暂时没有优惠券哦</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;
