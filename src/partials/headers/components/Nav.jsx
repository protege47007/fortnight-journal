import React from "react"
import { Link } from "react-router-dom"

function Nav(props) {
    const data = [
      <Link to={"/"}>Home</Link>, 
      <Link to={"relationship"}>Relationship Takes</Link>, 
      <Link to={"thoughts"}>Weird Thoughts</Link>, 
      <Link to={"reviews"}>Movie & TV Reviews</Link>, 
      <Link to={"contact"}>Contact Me</Link>
    ]
  const listItems = data.map((b, index) => (
    <li className={`nav-link ${props.linkClassName} text-blue-700 text-xl underline underline-offset-2 py-1`} key={index}>
      {b}
    </li>
  ))

  return <ul className={`nav-list ${props.navContainer}`}>{listItems}</ul>
}

export default Nav
