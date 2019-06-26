import React from 'react'
import '@/css/custom/custom.scss'
import Header from '@/components/common/header'
import { Link } from 'react-router-dom'
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
          <h4>
            搭配测试
          </h4>
          <p className="basic-info">1.基本信息</p>
          <div className="select-sex">
            <label><div><input name="sex" type="radio" /><span></span></div>女生</label>
            <label><div><input name="sex" type="radio" /><span></span></div>男生</label>
          </div>
          <div className="age select">
            年龄<input type="text" />岁
          </div>
          <div className="weight select">
            体重<input type="text" />kg
          </div>
          <div className="height select">
            身高<input type="text" />cm
          </div>
          <Link className="jump" to = '/homes/custom/body'>下一步</Link>
        </div>
      </main>
    )
  }
}
export default Custom