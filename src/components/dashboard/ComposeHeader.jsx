import React, { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import Brand from "../header/Brand";
import Nav from "../header/Nav";

function ComposeHeader() {
  const [open, setOpen] = useState(false)
  
  const icon_size = 28
  

  return (
    <header className="relative ">
      <Brand />
      { !open ? <FaHamburger size={icon_size} className={`my-2 `} onClick={()=>{open ? setOpen(false) : setOpen(true)}}/>
      :
      <span className={`absolute left-72 top-20 border border-black rounded-full`}>
        <MdOutlineClose size={icon_size} onClick={()=>{open ? setOpen(false) : setOpen(true)}} />  
      </span>}
      {open && <Nav linkClassName="" />}
    </header>
  );
}

export default ComposeHeader;
