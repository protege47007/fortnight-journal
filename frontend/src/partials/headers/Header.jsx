import React from 'react'
import Brand from './components/Brand';
import Nav from './components/Nav';


function Header() {
 
  return (
    <header className=" font-fontC font-light ">
      <Brand brandClassName="top-brand"/>
      <Nav
      navContainer="header-nav-container" 
      linkClassName="header-link"/>
    </header>
  );
}

export default Header
