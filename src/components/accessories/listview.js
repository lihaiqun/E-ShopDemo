import React from 'react'
import ReactDOM from 'react-dom'
import { PullToRefresh } from 'antd-mobile';
class DataListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [1,2,3],
      height: document.documentElement.clientHeight,
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

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei
    }), 0);
  }

  render() {
    return (
    <div className="datalist">
      <div>
      <PullToRefresh
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
          direction= 'up'
          style={{height:this.state.height,overflow:'auto'}}
          ref={el => this.ptr = el}
      >
        <div>
          <ul>
          {
            this.state.dataSource.map((v,i) => {
              return (<li key={i}>{v}</li>)
            })
          }
          </ul>
        </div>
      </PullToRefresh>
      </div>
    </div>);
  }
}
export default DataListView