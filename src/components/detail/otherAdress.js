import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Link } from 'react-router-dom';

export default class Com extends React.Component {
  constructor (props) {
    super(props)
  }
// 半成品
  render () {
    console.log(this.props.props.match)
    var arr = ["上海","河南","江西","江苏","浙江","北京"];
  return(
    <QueueAnim
    animConfig={[
      { opacity: [1, 0], translateY: [0, 50] },
      { opacity: [1, 0], translateY: [0, -50] }
    ]}
    >
      <div className = "detail_main-otherAdress" key = "b">
        <div className = "other" onClick = { () => { this.props.props.setOtherAdress() } }></div>
        <div className = "adress">
          <div className = "top">
            所在地区
            <i className = "cancel"  style = {{
                background: `url(${ require('@/images/detail/cancel.png') }) no-repeat center`
              }} onClick = { () => { this.props.props.setOtherAdress() } }></i>
          </div>
          <div className = "choose">
            <p>请选择</p>
            <ul>
              {
                arr.map((item, index) => (
                  <li key = { index } onClick = { () => { this.props.props.setOtherAdress() } }><Link to = { this.props.props.match.path + "/"+ item }>{item}</Link></li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </QueueAnim>
  )} 
}           