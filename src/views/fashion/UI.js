import React from 'react';
import '@/css/fashion.scss';
import { Tabs, WhiteSpace } from 'antd-mobile';
class Com extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      tabs: [
        { title: '关注' },
        { title: '网红' },
        { title: '明星' },
        { title: '素人' }
      ]
    })
  }
  componentDidMount () {
  }
  render () {
    return (
      <div id = "fashion">
        <header className = "fashion_header">
          <div className = "search">
            <i>图标</i><p>大家都在搜"连衣裙"</p>
          </div>
          </header>
          <div className = "fashion_list">
          <WhiteSpace />
            <Tabs tabs={this.state.tabs} initialPage={1} animated={false} useOnPan={false}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
              <div className = "fashion_attention">
                <img src = "" alt = "" /><p>这里空空一片</p><p className = "interest">查看感兴趣的ICON>></p>
              </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
              <ul className = "fashion_all">
                <li>
                  <div className = "list_title">
                    <img className = "title_img" src = "" alt = "图片马上来" />
                    <div className = "title">
                      <p className = "title_name">萌喵酱</p>
                      <p className = "title_tip">网络红人 170cm/50kg</p>
                    </div>
                  </div>
                  <img className = "show_img" src = "" alt = "图片马上来" />
                  <div className = "nickname">#假两件卫衣裙</div>
                  <div className = "share_way">
                    <div className = "like"><i>图标</i><span>喜欢</span></div>
                    <div className = "share_to"><i>图标</i><span>分享</span></div>
                    <div className = "weibo"><i>图标</i></div>
                  </div>
                </li>
              </ul>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
              <ul className = "fashion_all">
                <li>
                  <div className = "list_title">
                    <img className = "title_img" src = "" alt = "图片马上来" />
                    <div className = "title">
                      <p className = "title_name">萌喵酱</p>
                      <p className = "title_tip">网络红人 170cm/50kg</p>
                    </div>
                  </div>
                  <img className = "show_img" src = "" alt = "图片马上来" />
                  <div className = "nickname">#假两件卫衣裙</div>
                  <div className = "share_way">
                    <div className = "like"><i>图标</i><span>喜欢</span></div>
                    <div className = "share_to"><i>图标</i><span>分享</span></div>
                    <div className = "weibo"><i>图标</i></div>
                  </div>
                </li>
              </ul>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
              <ul className = "fashion_all">
                <li>
                  <div className = "list_title">
                    <img className = "title_img" src = "" alt = "图片马上来" />
                    <div className = "title">
                      <p className = "title_name">萌喵酱</p>
                      <p className = "title_tip">网络红人 170cm/50kg</p>
                    </div>
                  </div>
                  <img className = "show_img" src = "" alt = "图片马上来" />
                  <div className = "nickname">#假两件卫衣裙</div>
                  <div className = "share_way">
                    <div className = "like"><i>图标</i><span>喜欢</span></div>
                    <div className = "share_to"><i>图标</i><span>分享</span></div>
                    <div className = "weibo"><i>图标</i></div>
                  </div>
                </li>
              </ul>
              </div>
            </Tabs>
            </div>
        </div>
    )
  }
}

export default Com;