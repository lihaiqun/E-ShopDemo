import React from 'react';
import QueueAnim from 'rc-queue-anim';
export default ({props}) => {
  return(
    <QueueAnim
    animConfig={[
      { opacity: [1, 0], translateY: [0, 50] },
      { opacity: [1, 0], translateY: [0, -50] }
    ]}
    >
      <div className = "detail_more" key = "more">
        <div className = "detail_more-info">
          <div className = "triangle"></div>
        </div>
        <div className = "detail_more-other" onClick = { () => { props.changeMoreFlag() } }></div>
      </div>
    </QueueAnim>  
)}