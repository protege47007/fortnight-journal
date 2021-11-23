import React from "react";

function Nav(props) {
    const data = ["Home", "Relationship Takes", "Weird Thoughts", "Movie & TV Reviews", "Contact Us"];
  const listItems = data.map((b, index) => (
    <li className={`nav-link ${props.linkClassName}`} key={index}>
      {b}
    </li>
  ));

  return <ul className={`nav-list ${props.navContainer}`}>{listItems}</ul>;
}

export default Nav;
