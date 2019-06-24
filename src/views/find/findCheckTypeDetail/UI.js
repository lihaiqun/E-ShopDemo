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
        <header className = "find_check-header">
          <div className = "back" onClick = { this.goBack }>
            <i></i>
            <span>返回</span>  
          </div>  
          <div className = "cart">
            <i></i>
          </div>  
          聚会
        </header>
      </div>
    )
  }
}

export default Com;