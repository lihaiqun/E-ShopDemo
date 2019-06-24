import React from 'react';
import '@/css/find/check.scss';
import StyleInspiration from '@/components/find/HandBook/styleInspiration';
import StylePopular from '@/components/find/HandBook/stylePopular';
import TypeEssential from '@/components/find/HandBook/typeEssential';
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
          { this.props.match.params.name }
        </header>
        <main className = "find_check-main">
          <div className = "follow">
            <span>关注人数：123456</span>
            <p>+关注</p>
          </div>
          {
            this.props.match.path === '/finds/check/style/:name' ? <StylePopular /> : <TypeEssential />
            
          }
          <StyleInspiration />
        </main>
      </div>
    )
  }
}

export default Com;