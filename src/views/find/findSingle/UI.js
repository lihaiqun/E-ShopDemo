import React from 'react';
import '@/css/find/single.scss';
import SingleProlist from '@/components/find/Single/singleProlist';
import SingleScreen from '@/components/find/Single/singleScreen';
import { SearchBar } from 'antd-mobile';
class Com extends React.Component {
  componentDidMount () {
  }

  appearScreen = () => {
    this.props.changeScreenFlag()
  }

  render () {
    return (
      <div className = "container">
        {/* <SearchBar placeholder="Search" maxLength={8} /> */}
        <header className = "find_findSingle-header">
          <span onClick = { () => { this.props.history.go(-1) }}>&lt;返回</span>
          <div className = "search">搜索</div>
        </header>
        <main className = "find_findSingle-main">
          <ul className = "checkWay">
            <li>默认</li>
            <li>销量</li>
            <li>价格</li>
            <li onClick = { this.appearScreen }>筛选&gt;</li>
          </ul>
          <SingleScreen ejectScreen = { this.props }/>
          <SingleProlist />
        </main>
      </div>
    )
  }
}

export default Com;