import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Link } from 'react-router-dom';

export default class Com extends React.Component {
  constructor (props) {
    super(props)
  }
// 半成品
  render () {
    console.log(this)
    const nameArr = this.props.match.params.name.split("-")
    console.log(nameArr)
    let arr = [];
    if ( nameArr.length === 1) {
      arr = ["宝山","松江","张江"];
    } else if ( nameArr.length === 2 ) {
      arr = ["吴淞街道","水产路"];
    } else {
      arr = [];
    }
  return(
    <QueueAnim
    animConfig={[
      { opacity: [1, 0], translateY: [0, 50] },
      { opacity: [1, 0], translateY: [0, -50] }
    ]}
    >
      <div className = "detail_main-otherAdress" key = "b">
        <div className = "adress">
          <div className = "top">
            所在地区
            <i className = "cancel"  style = {{
                background: `url(${ require('@/images/detail/cancel.png') }) no-repeat center`
              }} onClick = { () => { this.props.props.setOtherAdress() } }></i>
          </div>
          <div className = "choose">
            <p>{this.props.match.params.name}请选择</p>
            {
              arr.length ?
            <ul>
              {
                arr.map((item, index) => (
                  <li key = { index }><Link to = { this.props.match.url + "-"+ item }>{item}</Link></li>
                ))
              }
            </ul>
            :
            <div>
              <input type="text" placeholder="请输入门牌号" ref = "text"/>
              <button onClick = { () => { 
                const arr = this.props.match.url.split("/")
                const str2 = arr.pop()
                console.log(arr.join(""))
                const str = str2 + "-" + this.refs.text.value;
                this.props.history.push({pathname:arr.join("/"),state: {name: str}}) ;
                } }>确认</button>
            </div>
            }
          </div>
        </div>
      </div>
    </QueueAnim>
  )} 
}