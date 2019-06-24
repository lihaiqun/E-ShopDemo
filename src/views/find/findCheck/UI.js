import React from 'react';
import '@/css/find/check.scss';
import { Link } from 'react-router-dom';
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
          穿搭手册
        </header>
        <button><Link to = "/finds/check/style/韩系">韩系</Link></button>
        <button><Link to = "/finds/check/type/聚会">聚会</Link></button>
      </div>
    )
  }
}

export default Com;