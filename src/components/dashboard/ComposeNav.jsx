import React from 'react'
import {FaArchive, FaTrashAlt, FaUserAlt} from 'react-icons/fa';
import {RiDraftLine} from 'react-icons/ri';
import {ImFilesEmpty} from 'react-icons/im';
import { Link } from 'react-router-dom';


function ComposeNav() {
  const icon_size = 32
  const links = [
    {url: "/compose/profile", title: "profile", icon: <FaUserAlt size={icon_size}/>},
    {url: "/compose/posts", title: "posts", icon: <ImFilesEmpty size={icon_size}/>},
    {url: "/compose/archive", title: "archive", icon: <FaArchive size={icon_size}/>},
    {url: "/compose/drafts", title: "drafts", icon: <RiDraftLine size={icon_size}/>},
    {url: "/compose/trash", title: "trash", icon: <FaTrashAlt size={icon_size}/>}
  ]
  return (
    <nav className="border border-solid border-x-0 border-blue-300 flex justify-evenly my-3 mx-0 py-2 ">
          {links.map( ({url, title, icon}) => (
          <Link to={url} key={title}><span className="text-center">{icon}{title}</span></Link>
          ))}
      </nav>
  )
}

export default ComposeNav;