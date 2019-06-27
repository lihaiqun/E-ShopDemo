import React from 'react';
import '@/css/detail/detail.scss';
import DetailInfo from '@/views/detail/detailInfo';
import DetailEvaluate from '@/views/detail/detailEvaluate';
import DetailShop from '@/views/detail/detailShop';
import DetailMore from '@/components/detail/detailMore';
import { NavLink, Route, Switch } from 'react-router-dom';

class Com extends React.Component {
  componentDidMount () {

  }

  changeMoreFlag = () => {
    this.props.changeMoreFlag();
  }

  render () {
    return (
      <div className="container">
      <header className = "detail_header">
        <div className = "detail_header-back">
          <i style = {{
            background: `url(${ require('@/images/detail/return.png') }) no-repeat center`
          }}>
          </i>
        </div>
        <ul className = "detail_header-title">
          <li>
            <NavLink to = { this.props.match.url } exact>
              商品
            </NavLink>
          </li>
          <li>
            <NavLink to = { this.props.match.url + '/info' }>
              详情
            </NavLink>
          </li>
          <li>
            <NavLink to = { this.props.match.url + '/evaluate' }>
              评价
            </NavLink>
          </li>
        </ul>
        <div className = "detail_header-share">
          <i style = {{
            background: `url(${ require('@/images/detail/share.png') }) no-repeat center`
          }}>
          </i>
        </div>
        <div className = "detail_header-more" onClick = { this.changeMoreFlag }>
          <i style = {{
            background: `url(${ require('@/images/detail/dotdot.png') }) no-repeat center`
          }}>
          </i>
        </div>
      </header>
      <Switch>
        <Route path = { this.props.match.url + '/info' } component = { DetailInfo }/>
        <Route path = { this.props.match.url + '/evaluate' } component = { DetailEvaluate }/>
        <Route path = { this.props.match.url } component = { DetailShop }/>
      </Switch>
      <footer className = "detail_footer">
          <div className = "detail_footer-customer">
            <i style = {{
            background: `url(${ require('@/images/find/totalReturn.png') }) no-repeat center`
          }}></i>
            <p>客服</p>
          </div>
          <div className = "detail_footer-collection">
            <i style = {{
            background: `url(${ require('@/images/find/totalReturn.png') }) no-repeat center`
          }}></i>
            <p>收藏</p>
          </div>
          <div className = "detail_footer-cart">
            <i style = {{
            background: `url(${ require('@/images/find/totalReturn.png') }) no-repeat center`
          }}></i>
            <p>购物车</p>
          </div>
          <div className = "detail_footer-button">
            <button className = "addCart">加入购物车</button>
            <button className = "buyNow">立即购买</button>
          </div>
      </footer>
      { this.props.moreFlag ?  <DetailMore props = { this } /> : "" }
    </div>
    )
  }
}

export default Com;