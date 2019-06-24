import React from 'react'
import Banner from '@/components/hotsale/banner'
import '@/css/hotsale/hotsale.scss'
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
            todo
          </section>
      </main>
    )
  }
}
export default Home