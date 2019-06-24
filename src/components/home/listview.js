import React from 'react'
import ReactDOM from 'react-dom'
import { PullToRefresh } from 'antd-mobile';
import '@/css/home/listview.scss'
class DataListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [1,2,3],
      height:document.documentElement.offsetHeight,
      refreshing: true,
      isLoading: true,
    };
  }

  onRefresh = () => {
    this.setState({
      dataSource: [...this.state.dataSource,444,222,111]
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
    <div className="homedatalist">
      <PullToRefresh
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
          direction= 'up'
          style={{height:'250px',overflow:'auto'}}
          ref={el => this.ptr = el}
      >
        <ul>
        {
          this.state.dataSource.map((v,i) => {
            return (
            <li key={i}>
              <a>
                <img />
                <div>
                  <p className="shopname">潮流百搭连衣裙</p>
                  <span className="desc">潮流百搭连衣裙</span>
                  <p className="price"><span>￥</span>158.3</p>
                </div>
              </a>
            </li>)
          })
        }
        </ul>
      </PullToRefresh>
    </div>);
  }
}
export default DataListView