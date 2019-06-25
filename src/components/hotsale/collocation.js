import React from 'react'
import { PullToRefresh } from 'antd-mobile';
import '@/css/hotsale/collocation.scss'
class DataListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [1,2,3,1],
      refreshing: true,
      isLoading: true,
    };
  }

  onRefresh = () => {
    this.setState({
      dataSource: [...this.state.dataSource,1,1,1,1]
    })
    setTimeout(() => {
      this.setState({
        refreshing:false
      })
    }, 1000);
    console.log(111)
  };
  render() {
    return (
      <div className="hotsaledatalist">
        <ul>
        {
          this.state.dataSource.map((v,i) => {
            return (
            <li key={i}>
              <a>
                <img />
                <div className="details">
                  <p className="shopname">潮流百搭连衣裙</p>
                  <span className="desc">潮流百搭连衣裙</span>
                  <div className="price-container">
                    <p className="price"><span>￥</span>158.3</p>
                    <p className="like"><span>??</span>2333</p>
                  </div>
                </div>
              </a>
            </li>)
          })
        }
        </ul>
        <PullToRefresh className="outerbox"
        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}
        direction= 'up'
        style={{height:'50px', overflow:'auto'}}
        ref={el => this.ptr = el}
    >
      <span>上拉加载</span>
      </PullToRefresh>
      </div>);
  }
}
export default DataListView