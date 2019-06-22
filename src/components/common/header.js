import React from 'react'
import '@/css/header.scss'
const Header = (props) => {
  return (
    <header className="commonheader">
      <span onClick={props.history.goBack}>&lt;</span>
      <p>{props.name}</p>
      <span></span>
    </header>
  )
}
export default Header