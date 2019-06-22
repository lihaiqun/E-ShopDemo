import React from 'react'
import '@/css/home.scss'
class Home extends React.Component {
  render () {
    return (
      <main id="home">
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
            <a><img src="" /></a>
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
      </main>
    )
  }
}
export default Home