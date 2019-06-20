import React from 'react';
class Com extends React.Component {
  render () {
    return (
      <div className = "coupon">
        <header className = "header">
          <span className = "iconfont icon-xiangzuo"></span>
          <p className = "myPrice">我的优惠券</p>
          <p className = "redemptionCode">兑换码</p>
        </header>
      </div>
    )
  }
}
export default Com;