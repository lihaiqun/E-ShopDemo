import React from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
class Com extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      tabs: [
        { title: '搭配' },
        { title: '单品' }
      ]
    })
  }
  componentDidMount () {

  }
  goBackUser () {
    this.props.history.go(-1)
  }
  render () {
    return (
      <div className = "my_footPrint">
        <header className = "footerPrint-header">
          <i onClick = { this.goBackUser.bind(this) }>图标</i><span>我的足迹</span>
        </header>
        <div className = "match_single">
          <WhiteSpace />
          <Tabs tabs={this.state.tabs} initialPage={2} animated={false} useOnPan={false}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
              <ul className = "match_img">
                <li><img src = "" alt = "图片马上来" /></li>
                <li><img src = "" alt = "图片马上来" /></li>
                <li><img src = "" alt = "图片马上来" /></li>
                <li><img src = "" alt = "图片马上来" /></li>
              </ul>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
            <ul className = "single_goods">
              <li><img src = "" alt = "马上图就来" /></li>
              <li><img src = "" alt = "马上图就来" /></li>
              <li><img src = "" alt = "马上图就来" /></li>
              <li><img src = "" alt = "马上图就来" /></li>
              <li><img src = "" alt = "马上图就来" /></li>
              <li><img src = "" alt = "马上图就来" /></li>
            </ul>
            </div>
          </Tabs>
          <WhiteSpace />
        </div>
      </div>
    )
  }
}

export default Com;
