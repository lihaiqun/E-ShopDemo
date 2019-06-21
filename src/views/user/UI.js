import React from 'react';
import '@/css/user.scss';
class Com extends React.Component {
  componentDidMount () {

  }
  render () {
    return (
      <div className = "main">
        <header className = "header">个人中心头部</header>
        <div className = "content">个人中心内容</div>
      </div>
    )
  }
}

export default Com;
