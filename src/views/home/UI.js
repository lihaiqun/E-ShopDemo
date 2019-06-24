import React from 'react'
import ReactDOM from 'react-dom'
import Listview from '@/components/home/listview'
import '@/css/home/home.scss'
import { Link } from 'react-router-dom'
class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      height: 0
    }
  }
  componentDidMount () {
    this.setState({
      height: this.refs['home'].scrollHeight
    })
    console.log(this.state.height)
  }
  render () {
    console.log(this.state.height)
    return (
      <main id="home" ref='home'>
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
          <a><img src="" /></a>
            <p>热销榜单</p>
          </div>
          <div>
          <Link to = '/homes/accessories'><img src="" /></Link>
            <p>配饰</p>
          </div>
          <div>
            <a><img src="" /></a>
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
          <Listview height={this.state.height}/>
        </section>
      </main>
    )
  }
}
export default Home