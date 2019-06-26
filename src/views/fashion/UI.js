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
            <i><img src = {require("@/images/fashion/search.png")} alt = "" /></i><p>大家都在搜"连衣裙"</p>
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
                  <img className = "title_img" src = {require("@/images/fashion/avater1.png")} alt = "" />
                    <div className = "title">
                      <p className = "title_name">萌喵酱</p>
                      <p className = "title_tip">网络红人 170cm/50kg</p>
                    </div>
                  </div>
                  <div className = "show_img">
                    <img src = {require("@/images/fashion/share1-1.png")} alt = "图片马上来" />
                    <img src = {require("@/images/fashion/share1-2.png")} alt = "图片马上来" />
                    <img src = {require("@/images/fashion/share1-3.png")} alt = "图片马上来" />
                    <img src = {require("@/images/fashion/share1-4.png")} alt = "图片马上来" />
                    <img src = {require("@/images/fashion/share1-5.png")} alt = "图片马上来" />
                    <img src = {require("@/images/fashion/share1-7.png")} alt = "图片马上来" />
                    <img src = {require("@/images/fashion/share1-7.png")} alt = "图片马上来" />
                    <img src = {require("@/images/fashion/share1-8.png")} alt = "图片马上来" />
                    <img src = {require("@/images/fashion/share1-4.png")} alt = "图片马上来" />
                  </div>
                  <div className = "nickname">#假两件卫衣裙</div>
                  <div className = "share_way">
                    <div className = "like"><i><img src = {require("@/images/fashion/sharelink.png")} alt = "图片马上来" /></i><span>喜欢</span></div>
                    <div className = "share_to"><i><img src = {require("@/images/fashion/sharelink.png")} alt = "图片马上来" /></i><span>分享</span></div>
                    <div className = "weibo"><i>3个小时前</i></div>
                  </div>
                </li>
              </ul>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
              <ul className = "fashion_all">
              <li>
                  <div className = "list_title">
                  <img className = "title_img" src = {require("@/images/fashion/avater2.png")} alt = "" />
                    <div className = "title">
                      <p className = "title_name">蓝枫</p>
                      <p className = "title_tip">当红明星 170cm/50kg</p>
                    </div>
                  </div>
                  <div className = "show_img">
                    <img src = {require("@/images/fashion/share2-1.png")} alt = "图片马上来" />
                    <img src = {require("@/images/fashion/share2-2.png")} alt = "图片马上来" />
                    <img src = {require("@/images/fashion/share2-3.png")} alt = "图片马上来" />
                  </div>
                  <div className = "nickname">#假两件卫衣裙</div>
                  <div className = "share_way">
                    <div className = "like"><i><img src = {require("@/images/fashion/sharelink.png")} alt = "图片马上来" /></i><span>喜欢</span></div>
                    <div className = "share_to"><i><img src = {require("@/images/fashion/sharelink.png")} alt = "图片马上来" /></i><span>分享</span></div>
                    <div className = "weibo"><i>3个小时前</i></div>
                  </div>
                </li>
                <li>
                  <div className = "list_title">
                  <img className = "title_img" src = {require("@/images/fashion/avater4.png")} alt = "" />
                    <div className = "title">
                      <p className = "title_name">萌喵酱</p>
                      <p className = "title_tip">当红明星 170cm/50kg</p>
                    </div>
                  </div>
                  <div className = "show_img">
                    <img src = {require("@/images/fashion/share1-1.png")} alt = "图片马上来" />
                    <img src = {require("@/images/fashion/share1-2.png")} alt = "图片马上来" />
                    <img src = {require("@/images/fashion/share1-3.png")} alt = "图片马上来" />
                  </div>
                  <div className = "nickname">#假两件卫衣裙</div>
                  <div className = "share_way">
                    <div className = "like"><i><img src = {require("@/images/fashion/sharelink.png")} alt = "图片马上来" /></i><span>喜欢</span></div>
                    <div className = "share_to"><i><img src = {require("@/images/fashion/sharelink.png")} alt = "图片马上来" /></i><span>分享</span></div>
                    <div className = "weibo"><i>3个小时前</i></div>
                  </div>
                </li>
              </ul>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
              <ul className = "fashion_all">
              <li>
                  <div className = "list_title">
                  <img className = "title_img" src = {require("@/images/fashion/avater3.png")} alt = "" />
                    <div className = "title">
                      <p className = "title_name">爱时尚</p>
                      <p className = "title_tip">素人 170cm/50kg</p>
                    </div>
                  </div>
                  <div className = "show_img">
                    <img src = {require("@/images/fashion/share3-1.png")} alt = "图片马上来" />
                    <img src = {require("@/images/fashion/share3-2.png")} alt = "图片马上来" />
                    <img src = {require("@/images/fashion/share3-3.png")} alt = "图片马上来" />
                  </div>
                  <div className = "nickname">#假两件卫衣裙</div>
                  <div className = "share_way">
                    <div className = "like"><i><img src = {require("@/images/fashion/sharelink.png")} alt = "图片马上来" /></i><span>喜欢</span></div>
                    <div className = "share_to"><i><img src = {require("@/images/fashion/sharelink.png")} alt = "图片马上来" /></i><span>分享</span></div>
                    <div className = "weibo"><i>3个小时前</i></div>
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