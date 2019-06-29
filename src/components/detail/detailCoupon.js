import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Link } from 'react-router-dom';

export default class Com extends React.Component {
  constructor (props) {
    super(props)
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
      <div className = "detail_main-otherCoupon" key = "">
      <div className = "other" onClick = { () => { this.props.props.setDetailCouponFlag() } }></div>
        <div className = "coupon">
          <div className = "top">
            优惠券
            <i className = "cancel"  style = {{
                background: `url(${ require('@/images/detail/cancel.png') }) no-repeat center`
              }}  onClick = { () => { this.props.props.setDetailCouponFlag() } }></i>
          </div>
          <div className = "received">
            <p>已领取</p>
          </div>
          <div className = "received">
            <p>未领取</p>
          </div>
        </div>
      </div>
    </QueueAnim>
  )} 
}