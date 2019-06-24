import React from 'react';
class Com extends React.Component {
  componentDidMount () {

  }
  goBackUser () {
    this.props.history.go(-1)
  }
  render () {
    return (
      <div className = "user_reward">
        <header className = "reward_header">
          <i onClick = { this.goBackUser.bind(this) }>图标</i><span>推荐奖励</span><i>图标</i>
        </header>
        <div className = "reward_content">
          <div className = "recommend_ward"><img src="" alt="马上图就来" /></div>
          <p className = "reward_process">奖励流程</p>
          <div className = "reward_process-way">
            <div className = "reward_share">
              <img className = "reward_share-img" src="" alt="马上图就来" />
              <div className = "share">
                <img className = "share_img" src = "" alt = "图标" />
                <p>分享制定商品链接</p>
              </div>
            </div>
            <div className = "friend_buy">
              <div className = "buy">
                <img className = "buy_img" src = "" alt = "图标" />
                <p>好友购买</p>
                <span>（首次购买可享9折）</span>
              </div>
              <img  className = "friend_buy-img" src = "" alt = "马上图就来" />
            </div>
            <div className = "get_money">
              <img className = "get_money-img" src="" alt="马上图就来" />
              <div className = "money">
                <img className = "money_img" src = "" alt = "图标" />
                <p>分享者得5%现金奖励</p>
              </div>
            </div>
          </div>
          <p className = "know_reward">知道推荐哪些商品，试试这些热销商品吧</p>
          <ul className = "reward_goods">
            <li><img src = "" alt = "马上图就来" /></li>
            <li><img src = "" alt = "马上图就来" /></li>
            <li><img src = "" alt = "马上图就来" /></li>
            <li><img src = "" alt = "马上图就来" /></li>
          </ul>
          <div className = "more_goods">更多商品></div>
        </div>
      </div>
    )
  }
}

export default Com;
