// 必备单品筛选页
import React from 'react';
export default ({ ejectScreen }) => {
  return (
  <div className = "singleScreen" style = {
    ejectScreen.screenFlag ? {display: "block"} : {display: "none"} 
  }>
    <div className = "screenWay">
      123
    </div>
    <div className = "another"  onClick = { () => { ejectScreen.changeScreenFlag() }}>
    </div>
  </div>
)}