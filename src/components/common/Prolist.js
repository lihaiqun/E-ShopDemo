import React from 'react';
import { Link } from 'react-router-dom';
const Com = ({prolist}) => (
  <ul className = "prolist">
    {
      prolist.map((item) => {
        return (
          <Link to = {'/detail/' + item.id} key = {item.id}>
            <div className = "img">
              <img src = {item.images.small} alt=""/>
            </div>
            <p>{item.title}</p>
          </Link>
      ) 
    })
  }
  </ul>
)
export default Com;