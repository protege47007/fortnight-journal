import React from 'react'
import {FaArchive, FaTrashAlt, FaUserAlt} from 'react-icons/fa';
import {RiDraftLine} from 'react-icons/ri';
import {ImFilesEmpty} from 'react-icons/im';


function ComposeNav() {
  return (
    <nav className="border border-solid border-x-0 border-blue-300 flex justify-evenly my-3 mx-0 py-2 ">
          <a href="/compose/profile"><span className="text-center"><FaUserAlt size={32}/>profile</span></a>
          <a href="/compose/posts"><span className="text-center"><ImFilesEmpty size={32}/>posts</span></a>
          <a href="/compose/archive"><span className="text-center"><FaArchive size={32}/>archive</span></a>
          <a href="/compose/drafts"><span className="text-center"><RiDraftLine size={32}/>drafts</span></a>
          <a href="/compose/trash"><span className="text-center"><FaTrashAlt size={32}/>trash</span></a>
      </nav>
  )
}

export default ComposeNav;