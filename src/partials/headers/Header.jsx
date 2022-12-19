import React from 'react'
import Brand from './components/Brand';
import Nav from './components/Nav';


function Header() {
 
  return (
    <header className=" font-fontC font-light ">
      <Brand brandClassName="top-brand"/>
      <hr className='border-t border-black my-2'/>
      <Nav
      navContainer="header-nav-container" 
      linkClassName="header-link"/>
    </header>
  );
}

export default Header
