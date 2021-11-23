import React, { Component } from "react";
import Brand from "./Brand";
import Nav from "./Nav";

export class Header extends Component {
  render() {
    
    return (
      <header className="home-header">
        <Brand brandClassName="top-brand"/>
        <Nav
        navContainer="header-nav-container" 
        linkClassName="header-link"/>
      </header>
    );
  }
}

export default Header;
