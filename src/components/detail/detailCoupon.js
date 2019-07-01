// 类组件
import React from 'react';
import QueueAnim from 'rc-queue-anim';

export default class Com extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.props.setNoReceviedArr(this.props.props.noReceviedArr);
    this.props.props.setReceviedArr(this.props.props.receviedArr);
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
            <i className = "cancel" onClick = { () => { this.props.props.setDetailCouponFlag() } }></i>
          </div>
          <div className = "received">
            <p className = "title">已领取</p>
            <ul>
              {
                this.props.props.receviedArr.map(item => (
                  <li key = { item.id }>
                    <div className = "price">
                      <p>￥{ item.price }</p>
                      <span>{ item.require }</span>
                    </div>
                    <div className = "vertical"></div>
                    <div className = "produce">
                      <p className = "threshold">{ item.title }</p>
                      <p className = "date">{ item.date }</p>
                    </div>
                    <div className = "state">已领取</div>

                  </li>
                ))
              }
            </ul>
          </div>
          <div className = "received">
            <p className = "title">未领取</p>
            <ul>
              {
                this.props.props.noReceviedArr.map(item => (
                  <li key = { item.id }>
                    <div className = "price">
                      <p>￥{ item.price }</p>
                      <span>{ item.require }</span>
                    </div>
                    <div className = "vertical"></div>
                    <div className = "produce">
                      <p className = "threshold">{ item.title }</p>
                      <p className = "date">{ item.date }</p>
                    </div>
                    <div className = "state" xw = { item.id } onClick = { (e) => {
                      for (let i = 0; i < this.props.props.noReceviedArr.length; i++) {
                        if (this.props.props.noReceviedArr[i].id === e.target.getAttribute("xw")) {
                            this.props.props.receviedArr.push(this.props.props.noReceviedArr[i]);
                            this.props.props.noReceviedArr.splice(i, 1);
                            this.props.props.setNoReceviedArr(this.props.props.noReceviedArr);
                            this.props.props.setReceviedArr(this.props.props.receviedArr);
                        }
                      }
                    }}>领取</div>

                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </QueueAnim>
  )} 
}

// 函数式组件
// import React from 'react';
// import QueueAnim from 'rc-queue-anim';

// export default ({ props }) => {
// console.log(props)

//   return(
//     <QueueAnim
//     animConfig={[
//       { opacity: [1, 0], translateY: [0, 50] },
//       { opacity: [1, 0], translateY: [0, -50] }
//     ]}
//     >
//       <div className = "detail_main-otherCoupon" key = "">
//       <div className = "other" onClick = { () => { props.setDetailCouponFlag() } }></div>
//         <div className = "coupon">
//           <div className = "top">
//             优惠券
//             <i className = "cancel" onClick = { () => { props.setDetailCouponFlag() } }></i>
//           </div>
//           <div className = "received">
//             <p className = "title">已领取</p>
//             <ul>
//               {
//                 props.receviedArr.map(item => (
//                   <li key = { item.id }>
//                     <div className = "price">
//                       <p>￥{ item.price }</p>
//                       <span>{ item.require }</span>
//                     </div>
//                     <div className = "vertical"></div>
//                     <div className = "produce">
//                       <p className = "threshold">{ item.title }</p>
//                       <p className = "date">{ item.date }</p>
//                     </div>
//                     <div className = "state">已领取</div>

//                   </li>
//                 ))
//               }
//             </ul>
//           </div>
//           <div className = "received">
//             <p className = "title">未领取</p>
//             <ul>
//               {
//                 props.noReceviedArr.map(item => (
//                   <li key = { item.id }>
//                     <div className = "price">
//                       <p>￥{ item.price }</p>
//                       <span>{ item.require }</span>
//                     </div>
//                     <div className = "vertical"></div>
//                     <div className = "produce">
//                       <p className = "threshold">{ item.title }</p>
//                       <p className = "date">{ item.date }</p>
//                     </div>
//                     <div className = "state" xw = { item.id } onClick = { (e) => {
//                       for (let i = 0; i < props.noReceviedArr.length; i++) {
//                         if (props.noReceviedArr[i].id === e.target.getAttribute("xw")) {
//                             props.receviedArr.push(props.noReceviedArr[i]);
//                             props.noReceviedArr.splice(i, 1);
//                             props.setNoReceviedArr(props.noReceviedArr);
//                             props.setReceviedArr(props.receviedArr);
//                             return
//                         }
//                       }
//                     }}>领取</div>

//                   </li>
//                 ))
//               }
//             </ul>
//           </div>
//         </div>
//       </div>
//     </QueueAnim>
//   )} 