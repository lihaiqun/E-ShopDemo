import React from 'react';
import '@/css/find/check.scss';
class Com extends React.Component {


  componentDidMount () {

  }

  goBack = () => {
    this.props.history.go(-1);
  }

  render () {
    return (
      <div className = "container">
        <header className = 'find_header'>
          <div className = "find_header-back"><i></i><span>返回</span></div>
          <div className = "find_header-title">发现</div>
          <div className = "find_header-icon"><i></i></div>
        </header>
      </div>
    )
  }
}

export default Com;