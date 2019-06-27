import React from 'react'
import '@/css/custom-body/custom-body.scss'
import Header from '@/components/common/header'
import { Link } from 'react-router-dom'
import Pick from '@/components/custom/pickdata'
class Custom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {title: 'test1', desc: '嘻嘻嘻嘻嘻嘻嘻'},
        {title: 'test2', desc: '嘻嘻嘻嘻嘻嘻嘻'},
        {title: 'test3', desc: '嘻嘻嘻嘻嘻嘻嘻'},
        {title: 'test4'},
      ]
    }
  }
  componentDidMount () {
  }
  render () {
    return (
      <main id="custom-body">
        <Header name="私人订制" history={this.props.history} />
        <div className="info-container">
          <h4>
            2.体型选择
          </h4>
          <div className="pick-container">
            {
              this.state.data.map((v,i)=> (
                <Pick key={i} title = {v.title} desc = {v.desc} />
              ))
            }
          </div>
          <Link className="jump" to = '/homes/custom/face'>下一步</Link>
        </div>
      </main>
    )
  }
}
export default Custom