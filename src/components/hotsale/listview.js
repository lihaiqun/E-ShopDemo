import '@/css/hotsale/listview.scss'
import React from 'react'
const Listview = (props) => {
  return (
    <ul className="hotsale-listview">
      <li>
        <img className="box-left" />
        <div className="box-right">
          <p className="title">新款夏季ssssssdddddsssssssssssssssssssssssssssssssss</p>
          <p className="desc">推荐</p>
          {
            props.discount && <p className="discount">特惠</p>
          }
          <div className="line-container">
            <div>
              <p className="price">148</p>
              <s className="origin-price">133</s>
            </div>
            <button>图片</button>
          </div>
        </div>
      </li>
      <li>
        <img className="box-left" />
        <div className="box-right">
          <p className="title">新款夏季ssssssdddddsssssssssssssssssssssssssssssssss</p>
          <p className="desc">推荐</p>
          {
            props.discount && <p className="discount">特惠</p>
          }
          <div className="line-container">
            <div>
              <p className="price">148</p>
              <s className="origin-price">133</s>
            </div>
            <button>图片</button>
          </div>
        </div>
      </li>
      <li>
        <img className="box-left" />
        <div className="box-right">
          <p className="title">新款夏季ssssssdddddsssssssssssssssssssssssssssssssss</p>
          <p className="desc">推荐</p>
          {
             props.discount && <p className="discount">特惠</p>
          }
          <div className="line-container">
            <div>
              <p className="price">148</p>
              <s className="origin-price">133</s>
            </div>
            <button>图片</button>
          </div>
        </div>
      </li>
    </ul>
  )
}
export default Listview