import React from "react";

function Nav(props) {
    const data = [
      <a href="/">Home</a>, 
      <a href="/relationship">Relationship Takes</a>, 
      <a href="/thoughts">Weird Thoughts</a>, 
      <a href="/reviews">Movie & TV Reviews</a>, 
      <a href="/contact">Contact Me</a>
    ];
  const listItems = data.map((b, index) => (
    <li className={`nav-link ${props.linkClassName} text-blue-700 text-xl underline underline-offset-2 py-1`} key={index}>
      {b}
    </li>
  ));

  return <ul className={`nav-list ${props.navContainer}`}>{listItems}</ul>;
}

export default Nav;
