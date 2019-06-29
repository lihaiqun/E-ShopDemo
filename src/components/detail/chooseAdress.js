import React from 'react';
import QueueAnim from 'rc-queue-anim';
export default class Com extends React.Component {
  constructor (props) {
    super(props)
    console.log(this.props);
  }

  render () {
    // console.log(this.props.props)
  return(
    <QueueAnim
    animConfig={[
      { opacity: [1, 0], translateY: [0, 50] },
      { opacity: [1, 0], translateY: [0, -50] }
    ]}
    >
      <div className = "detail_main-moreAdress" key = "a">
        <div className = "other" onClick = { () => { this.props.props.changeMoreAdressFlag() } }></div>
        <div className = "adress">
          <div className = "top">
            更多地址
            <i className = "cancel"  style = {{
                background: `url(${ require('@/images/detail/cancel.png') }) no-repeat center`
              }}  onClick = { () => { this.props.props.changeMoreAdressFlag() } }></i>
          </div>
          <ul className = "adressInfo">
            <li ref = "adress1" onClick = { () => { 
              for (let i in this.refs) {
                this.refs[i].children[0].style.background = `url(${ require('@/images/detail/check.png') }) no-repeat center`;
              } 
              const arr = this.refs.adress1.children[1].children[1].innerText.split(' ')
              const str = arr.slice(0, arr.length-1).join('');
              this.props.props.changeSetAdress(str);

              this.refs.adress1.children[0].style.background = `url(${ require('@/images/detail/checked.png') }) no-repeat center`
              }}>
                <i className = "icon" style = {{
                background: `url(${ require('@/images/detail/check.png') }) no-repeat center`
              }}></i>
                <div className = "information">
                  <p><i  style = {{
                    background: `url(${ require('@/images/detail/position.png') }) no-repeat center`
                  }}></i> 张小白</p>
                  <p>江苏省 南通市 徐泾镇龙联路128弄56号</p>
                </div>
                <div className = "tel">18852981701</div>
            </li>
            <li ref = "adress2" onClick = { () => { 
              for (let i in this.refs) {
                this.refs[i].children[0].style.background = `url(${ require('@/images/detail/check.png') }) no-repeat center`;
              } 
              const arr = this.refs.adress2.children[1].children[1].innerText.split(' ')
              const str = arr.slice(0, arr.length-1).join('');
              this.props.props.changeSetAdress(str);

              this.refs.adress2.children[0].style.background = `url(${ require('@/images/detail/checked.png') }) no-repeat center`
              }}>
                <i className = "icon" style = {{
                background: `url(${ require('@/images/detail/check.png') }) no-repeat center`
              }}></i>
                <div className = "information">
                  <p><i  style = {{
                    background: `url(${ require('@/images/detail/position.png') }) no-repeat center`
                  }}></i> 张小白</p>
                  <p>安徽省 宣城市 宣州区 徐泾镇龙联路128弄56号</p>
                </div>
                <div className = "tel">18852981701</div>
            </li>
            <li ref = "adress3" onClick = { () => { 
              for (let i in this.refs) {
                this.refs[i].children[0].style.background = `url(${ require('@/images/detail/check.png') }) no-repeat center`;
              } 
              const arr = this.refs.adress3.children[1].children[1].innerText.split(' ')
              const str = arr.slice(0, arr.length-1).join('');
              this.props.props.changeSetAdress(str);

              this.refs.adress3.children[0].style.background = `url(${ require('@/images/detail/checked.png') }) no-repeat center`
              }}>
                <i className = "icon" style = {{
                background: `url(${ require('@/images/detail/check.png') }) no-repeat center`
              }}></i>
                <div className = "information">
                  <p><i  style = {{
                    background: `url(${ require('@/images/detail/position.png') }) no-repeat center`
                  }}></i> 张小白</p>
                  <p>上海 上海市 青浦区 徐泾镇龙联路128弄56号</p>
                </div>
                <div className = "tel">18852981701</div>
            </li>
          </ul>
          <div className = "addAdress"  onClick = { () => { 
            this.props.props.changeMoreAdressFlag();
            this.props.props.setOtherAdress();
            } } >
            选择其他配送地址
          </div>
        </div>
      </div>
    </QueueAnim>
  )} 
}           