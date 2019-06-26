// 发现首页头部
import React from 'react';

export default () => (
  <header className = 'find_header'>
    <div className = "find_header-back"><i style = {{
      background: `url(${ require('@/images/find/totalReturn.png') }) no-repeat center`
    }}></i></div>
    <div className = "find_header-title">发现</div>
    <div className = "find_header-icon"><i style = {{
      background: `url(${ require('@/images/find/findCart.png') }) no-repeat center`
    }}></i></div>
  </header>
)
