import React from 'react';
import { SearchBar } from 'antd-mobile';
class Com extends React.Component {
  componentDidMount () {

  }
  render () {
    return (
      <div className = "contianer">
        <SearchBar placeholder="Search" maxLength={8} />
      </div>
    )
  }
}

export default Com;