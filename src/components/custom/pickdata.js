import React from 'react'
import '@/css/custom/pickdata.scss'
const pickdata = (props) => {
  return (
    <div className="custom-pickdata">
      <img />
      <p className="title">{props.title}</p>
      {
        props.desc && <p className="desc">{props.desc}</p>
      }
    </div>
  )
}
export default pickdata