import React from 'react';
class Com extends React.Component {
  componentDidMount () {

  }
  goBackUser () {
    this.props.history.go(-1)
  }
  render () {
    return (
      <div className = "user_service">
        <header className = "service_header">
          <i onClick = { this.goBackUser.bind(this) }>图标</i><span>在线客服</span><i>图标</i>
        </header>
        <div className = "common_question">
          <div className = "question_title">常见问题</div>
          <ul className = "question_list">
            <li><i>图标</i><span>我的足迹</span><i>图标</i></li>
            <li><i>图标</i><span>退款/退货</span><i>图标</i></li>
            <li><i>图标</i><span>搭配配折扣</span><i>图标</i></li>
            <li><i>图标</i><span>售后服务</span><i>图标</i></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Com;
