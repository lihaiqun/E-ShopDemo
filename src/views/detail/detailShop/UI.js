import React from 'react';
import { Carousel } from 'antd-mobile';
import { Route, Switch } from 'react-router-dom';
import ChooseAdress from '@/components/detail/chooseAdress';
import OtherAdress from '@/components/detail/otherAdress';
import OtherAdress2 from '@/components/detail/otherAdress2';
import DetailCoupon from '@/components/detail/detailCoupon';

class Com extends React.Component {
  constructor(props){
    super(props);
    this.myRef=React.createRef();
  }
  
  componentDidMount () {
    
  }

// 要修改
  render () {
    console.log(this)
    return (
      <div className = "detail_main">
        <Carousel
          className = "detail_main-banner" 
          autoplay = {true}
          infinite
        >
          <div className = "banner" ref={this.myRef}>1</div>
          <div className = "banner">2</div>
          <div className = "banner">3</div>
        </Carousel>
        <div className = "detail_main-introduce">
          <p className = "price">￥<span>159</span>.00</p>
          <p className = "title">夏装心机雪纺sukol小清新少女ins超火连衣裙女</p>
          <p className = "smallTitle">优质面料，刺绣网纱透视拼接，荷叶边设计</p>
        </div>

        <div className = "detail_main-coupon" onClick = { () => { this.props.setDetailCouponFlag() } }>
          <span className = "left">领券</span>
          <span className = "center"></span>
          <i className = "right"  style = {{
            background: `url(${ require('@/images/detail/rightback.png') }) no-repeat center`
          }}></i>
        </div>

        <div className = "detail_main-adress" onClick = { () => { this.props.changeMoreAdressFlag();} }>
          <span className = "left">送至</span>
          <span className = "center">{ this.props.setAdress }</span>
          <i className = "right"  style = {{
            background: `url(${ require('@/images/detail/rightback.png') }) no-repeat center`
          }}></i>
        </div>
        { this.props.moreAdressFlag ? <ChooseAdress props = { this.props } /> : null }
        { this.props.otherAdressFlag ? <OtherAdress props = { this.props } /> : null }
        { this.props.detailCouponFlag ? <DetailCoupon props = { this.props } /> : null }
        <Route path = {this.props.match.url + "/:name"} exact component = { OtherAdress2 }/>
      </div>
    )
  }
}

export default Com;