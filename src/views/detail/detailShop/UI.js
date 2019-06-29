import React from 'react';
import { Carousel } from 'antd-mobile';
import ChooseAdress from '@/components/detail/chooseAdress';

class Com extends React.Component {
  constructor(props){
    super(props);
    this.myRef=React.createRef();
  }
  
  componentDidMount () {
    
  }

  changeMoreAdress = () => {
    this.props.changeMoreAdressFlag();
  }
  
 
// 要修改
  render () {
    console.log(this.props)
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
        <div className = "detail_main-adress" onClick = { this.changeMoreAdress }>
          <span className = "left">送至</span>
          <span className = "center">上海市 宝山区</span>
          <i className = "right"  style = {{
            background: `url(${ require('@/images/detail/rightback.png') }) no-repeat center`
          }}></i>
        </div>
        { this.props.moreAdressFlag ? <ChooseAdress props = { this }/> : "" }
      </div>
    )
  }
}

export default Com;