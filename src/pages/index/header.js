import React, { Fragment } from 'react';
import './header.scss'

function Header() {
  return (
    <div className="header">
      <img className="header_img" src="//p.fyeds4.com/fengye/0/apd_1831759815cb02f353f883/0?800*943" />
      <div className="header_hot">
        <span>￥</span>138.00
        <div>
          <p>累计销量</p>
          <p>33000件</p>
        </div>
      </div>
    </div>
  )
}

export default Header