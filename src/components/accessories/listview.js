import React from 'react'
import { PullToRefresh } from 'antd-mobile';
class DataListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [1,2,3],
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
    <div className="datalist">
        <ul>
        {
          this.state.dataSource.map((v,i) => {
            return (<li key={i}>{v}</li>)
          })
        }
      </ul>
      <PullToRefresh
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
          direction= 'up'
      >
        <div style={{height:'50px'}}></div>
      </PullToRefresh>
    </div>);
  }
}
export default DataListView