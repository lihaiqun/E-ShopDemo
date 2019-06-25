// 必备单品筛选页
import React from 'react';
import { Slider } from 'antd-mobile';
export default ({ ejectScreen }) => {
  return (
  <div className = "singleScreen" style = {
    ejectScreen.screenFlag ? {display: "block"} : {display: "none"} 
  }>
    <div className = "screenWay">
      <div className = "top">
        <h5>筛选</h5>
        {/* 遗留问题 */}
        <Slider
            defaultValue={100}
            style={{ 
              marginLeft: ".12rem", 
              marginRight: ".12rem" 
            }}
            handleStyle={{
              width: ".05rem",
              height: ".2rem",
              borderRadius: ".03rem",
              marginLeft: 0
            }}
            min={0}
            max={100}
          />
      </div>
      <div className = "bottom">
        <button>重置</button>
        <button onClick = { () => { ejectScreen.changeScreenFlag() }}>确认</button>
      </div>
    </div>
    <div className = "another"  onClick = { () => { ejectScreen.changeScreenFlag() }}>
    </div>
  </div>
)}