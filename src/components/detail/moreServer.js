import React from 'react';
import QueueAnim from 'rc-queue-anim';
export default class Com extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    // console.log(this.props.props)
  return(
    <QueueAnim
    animConfig={[
      { opacity: [1, 0], translateY: [0, 50] },
      { opacity: [1, 0], translateY: [0, -50] }
    ]}
    >
      <div className = "detail_main-moreServer" key = "moreServer">
        <div className = "other" onClick = { () => { this.props.moreServerProps.changeMoreServerFlag() } }></div>
        <div className = "server">
          <div className = "top">
            说明
            <i className = "cancel" onClick = { () => { this.props.moreServerProps.changeMoreServerFlag() } }></i>
          </div>
          <div className = "main">
            <ul>
              <li>
                <h5>满88元包邮</h5>
                <p>官方自营满88元可包邮，不足88元收取运费10元</p>
              </li>
              <li>
                <h5>官方自营</h5>
                <p>带有“官方自营”字样的商品为官方精选并从官方仓库直接配送发货,售后由官方直接负责，未带该字样的商品为第三方商家销售并配送发货，售后由第三方商家负责，官方有权介入</p>
              </li>
              <li>
                <h5>七天无理由</h5>
                <p>本商品支持7天无理由退换货</p>
              </li>
              <li>
                <h5>平台运费说明</h5>
                <p>官方自营商品，单笔订单满88元免运费，不满88元收取10元运费：第三方商家销售商品运费由第三方商家自定，运费不合理可向平台反馈：优惠券不能抵扣运费</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </QueueAnim>
  )} 
}           