import React from 'react';

const Header =()=>{
  return (<div className="top-section">
  <div className="header-logo">
    <a className="logo-name" href="/">Bon Appétit</a>
    </div>

    <div className="header-pages">
    <ul>
    <li>
    <a href="/menu">Menu</a>
    </li>
    <li>
    <a href="/about">About</a>
    </li>
    <li>
    <a href="/reservation">Make Reservation <i className="fas fa-chevron-right"></i></a>
    </li>
    </ul>
    </div>
    </div>)
}

export default Header;
