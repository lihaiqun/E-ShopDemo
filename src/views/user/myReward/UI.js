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
          <i onClick = { this.goBackUser.bind(this) }></i><span>推荐奖励</span><i></i>
        </header>
        <div className = "reward_content">
          <div className = "recommend_ward"><img src="" alt="马上图就来了" /></div>
          <p className = "reward_process">奖励流程</p>
          <div className = "reward_process-way">
            <div className = "reward_share">
              <img className = "reward_share_img" src="" alt="" />
              <div className = "share">
                <img src = "" alt = "" />
                <p>分享制定商品链接</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;
