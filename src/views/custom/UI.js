import React from 'react'
import '@/css/custom/custom.scss'
import Header from '@/components/common/header'
class Custom extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount () {
  }
  render () {
    return (
      <main id="custom">
        <Header name="私人订制" history={this.props.history} />
        <img className="banner" />
        <div className="info-container">
          
        </div>
      </main>
    )
  }
}
export default Custom