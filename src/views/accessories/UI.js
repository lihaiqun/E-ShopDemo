import React from 'react'
import '@/css/accessories/accessories.scss'
import DetailList from '@/components/accessories/listview'
import Header from '@/components/common/header'
class Home extends React.Component {
  render () {
    return (
      <main id="accessories">
        <Header name="配饰" history={this.props.history} />
        <nav>
          <div className="top">
            <p>全部配饰</p>
            <p>换一组</p>
          </div>
          <ul className="navbar">
            <li>
              <a>
                <img />
                <span>帽子</span>
              </a>
            </li>
            <li>
              <a>
                <img />
                <span>帽子</span>
              </a>
            </li>
            <li>
              <a>
                <img />
                <span>帽子</span>
              </a>
            </li>
            <li>
              <a>
                <img />
                <span>帽子</span>
              </a>
            </li>
            <li>
              <a>
                <img />
                <span>帽子</span>
              </a>
            </li>
            <li>
              <a>
                <img />
                <span>帽子</span>
              </a>
            </li>
            <li>
              <a>
                <img />
                <span>帽子</span>
              </a>
            </li>
            <li>
              <a>
                <img />
                <span>帽子</span>
              </a>
            </li>
          </ul>
        </nav>
        <section className="detailList">
          <div className="operation">
            <p>默认</p>
            <p>销量</p>
            <p>价格</p>
            <p>筛选</p>
          </div>
          <DetailList />
        </section>
      </main>
    )
  }
}
export default Home