import React from 'react'
import Listview from '@/components/home/listview'
import Subnav from '@/components/home/subnav'
import '@/css/home/home.scss'
import { Link } from 'react-router-dom'
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 0
    }
  }
  componentDidMount () {
    this.props.getBannerList()
  }
  render () {
    // console.log(this.props)
    return (
      <main id="home" ref={el => this.home = el}>
        <section className="top">
          <header>
            <button className="scanner"></button>
            <span>搜索</span>
            <button className="msg"></button>
          </header>
          <div className="banner">
            <a>
              <img alt="" src={require('@/images/home/banner1.png')} />
            </a>
          </div>
        </section>
        <nav>
          <div>
          <Link to = '/homes/hotsale'><img alt="" src={require('@/images/home/hotsale.png')} /></Link>
            <p>热销榜单</p>
          </div>
          <div>
          <Link to = '/homes/accessories'><img alt="" src={require('@/images/home/accessories.png')} /></Link>
            <p>配饰</p>
          </div>
          <div>
          <Link to = '/homes/custom'><img alt="" src={require('@/images/home/custom.png') }/></Link>
            <p>私人订制</p>
          </div>
        </nav>
        <section className="classify">
          <div className="female">
            <a>
              <img alt="" src={require('@/images/home/female.png')} />
            </a>
          </div>
          <div className="male">
            <a>
              <img alt="" src={require('@/images/home/male.png')} />
            </a>
          </div>
        </section>
        <section className="subnav-contain">
          {
            this.props.subnavList.map((v, i) => {
              return (
                <Subnav key={i} name={v.name} desc={v.desc} proinfo={v.proinfo} />
              )
            })
          }
        </section>
        <section className="recommend">
          <h3 className="title"><p>专属推荐</p></h3>
          <Listview />
        </section>
      </main>
    )
  }
}
export default Home