import React from 'react'
import Listview from '@/components/home/listview'
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
    this.setState({
      height: this.home.scrollHeight
    })
  }
  render () {
    return (
      <main id="home" ref={el => this.home = el}>
        <header>
          <button>扫描</button>
          <span>搜索</span>
          <button>消息</button>
        </header>
        <section className="banner">
          <a>
            <img />
          </a>
        </section>
        <nav>
          <div>
          <Link to = '/homes/hotsale'><img src="" /></Link>
            <p>热销榜单</p>
          </div>
          <div>
          <Link to = '/homes/accessories'><img src="" /></Link>
            <p>配饰</p>
          </div>
          <div>
          <Link to = '/homes/custom'><img src="" /></Link>
            <p>私人订制</p>
          </div>
        </nav>
        <section className="classify">
          <div className="female">
            <a>
              <img />
            </a>
          </div>
          <div className="male">
            <a>
              <img />
            </a>
          </div>
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