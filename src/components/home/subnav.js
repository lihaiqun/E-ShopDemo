import React from 'react'
import '@/css/home/subnav.scss'
const subnav = (props) => {
return (
  <div className="subnav">
    <h4 className="title">{props.name}</h4>
    <p className="desc">{props.desc}</p>
    <div className="pro-contain">
      {
        props.proinfo.map((v, i) => {
          return (
            <a key={i}>
              <img alt="" src= {v.src}/>
              <div className="price-contain">
                { v.price &&  <span className="price">￥{v.price}</span>}
                { v.origin && <span className="origin">￥{v.origin}</span>}
                { v.save && <span className="price">{v.save}</span>}
              </div>
            </a>
          )
        })
      }
    </div>
  </div>
)
}
export default subnav