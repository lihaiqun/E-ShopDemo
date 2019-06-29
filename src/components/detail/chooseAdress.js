import React from 'react';
export default class Com extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log(this)
  return(
  <div className = "detail_main-moreAdress">
    <div className = "other" onClick = { () => { this.props.props.changeMoreAdress() } }></div>
    <div className = "adress">
      <div className = "top">
        更多地址
        <i className = "cancel"  style = {{
            background: `url(${ require('@/images/detail/cancel.png') }) no-repeat center`
          }}  onClick = { () => { this.props.props.changeMoreAdress() } }></i>
      </div>
      <ul className = "adressInfo">
        <li ref = "adress1" onClick = { () => { 
          for (let i in this.refs) {
            this.refs[i].children[0].style.background = `url(${ require('@/images/detail/check.png') }) no-repeat center`;
          } 
          this.refs.adress1.children[0].style.background = `url(${ require('@/images/detail/checked.png') }) no-repeat center`
          }}>
            <i className = "icon" style = {{
            background: `url(${ require('@/images/detail/check.png') }) no-repeat center`
          }}></i>
            <div className = "information">
              <p><i  style = {{
                background: `url(${ require('@/images/detail/position.png') }) no-repeat center`
              }}></i> 张小白</p>
              <p>上海上海市青浦区徐泾镇龙联路128弄56号</p>
            </div>
            <div className = "tel">18852981701</div>
        </li>
        <li ref = "adress2" onClick = { () => { 
          for (let i in this.refs) {
            this.refs[i].children[0].style.background = `url(${ require('@/images/detail/check.png') }) no-repeat center`;
          } 
          this.refs.adress2.children[0].style.background = `url(${ require('@/images/detail/checked.png') }) no-repeat center`
          }}>
            <i className = "icon" style = {{
            background: `url(${ require('@/images/detail/check.png') }) no-repeat center`
          }}></i>
            <div className = "information">
              <p><i  style = {{
                background: `url(${ require('@/images/detail/position.png') }) no-repeat center`
              }}></i> 张小白</p>
              <p>上海上海市青浦区徐泾镇龙联路128弄56号</p>
            </div>
            <div className = "tel">18852981701</div>
        </li>
        <li ref = "adress3" onClick = { () => { 
          for (let i in this.refs) {
            this.refs[i].children[0].style.background = `url(${ require('@/images/detail/check.png') }) no-repeat center`;
          } 
          this.refs.adress3.children[0].style.background = `url(${ require('@/images/detail/checked.png') }) no-repeat center`
          }}>
            <i className = "icon" style = {{
            background: `url(${ require('@/images/detail/check.png') }) no-repeat center`
          }}></i>
            <div className = "information">
              <p><i  style = {{
                background: `url(${ require('@/images/detail/position.png') }) no-repeat center`
              }}></i> 张小白</p>
              <p>上海上海市青浦区徐泾镇龙联路128弄56号</p>
            </div>
            <div className = "tel">18852981701</div>
        </li>
      </ul>
      <div className = "addAdress">
        选择其他配送地址
      </div>
    </div>
  </div>
)} 
}           