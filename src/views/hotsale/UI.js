import React from 'react'
import Banner from '@/components/hotsale/banner'
import '@/css/hotsale/hotsale.scss'
import Listview from '@/components/hotsale/listview'
import Collocation from '@/components/hotsale/collocation'
class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount () {
    console.log(this)
  }
  render () {
    return (
      <main id="hotsale">
          <header className="topheader">
            <span onClick={this.props.history.goBack}>&lt;</span>
            <p>二十四小时热销榜单</p>
            <div>
              消息
            </div>
          </header>
          <div className="placeholder"></div>
          <Banner />
          <section className="data-container">
            <Listview discount={true} />
          </section>
          <section className="subnav">
            <h3 className="title">品类热销榜</h3>
            <div className="subnav-two subnav-child">
              <a><img /></a> <a><img /></a>
            </div>
            <div className="subnav-two subnav-child">
              <a><img /></a> <a><img /></a>
            </div>
            <div className="subnav-four subnav-child">
            <a><img /></a> <a><img /></a> <a><img /></a> <a><img /></a>
            </div>
          </section>
          <section className="collocation">
            <h3>搭配收藏榜单</h3>
            <Collocation />
          </section>
      </main>
    )
  }
}
export default Home