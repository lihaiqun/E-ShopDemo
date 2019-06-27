import React from 'react';
export default ({props}) => {
  console.log(props)
  return(
  <div className = "detail_more">
    <div className = "detail_more-info">
      <div className = "triangle"></div>
    </div>
    <div className = "detail_more-other" onClick = { () => { props.changeMoreFlag() } }></div>
  </div>
)}