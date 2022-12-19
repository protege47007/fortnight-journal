import React, { useState } from "react"
import Brand from "../../components/header/Brand"
import Footer from "../../components/footer/Footer"

export default function Reg() {
  const [mail, setMail] = useState("")
  const [key, setKey] = useState("")
  const [c_key, setCKey] = useState("")
  const [full_name, setName] = useState("")

  function updateMail(e){
    setMail(e.target.value)
  }

  function updateKey(e){
    setKey(e.target.value)
  }

  function updateName(e){
    setName(e.target.value)
  }
  
  function updateCKey(e){
    setCKey(e.target.value)
  }

  
  return (
    <div className="bg-teal-400 ">
      <div className="bg-white px-2 pb-28 rounded-b-[3rem] ">
        <Brand/>
        <h3 className=" text-xl pt-10 px-4 pb-2">Register new account</h3>
            
        <form action="#" method="post" className="border border-teal-400 shadow shadow-gray-500 flex flex-col w-10/12 mx-auto p-4">
          <span>
            <label htmlFor="full" className=" block py-2 ">{full_name ? "full name" : ""}</label>
            <input type="text" id="full" className=" py-2 px-4 w-10/12 outline-teal-400 rounded bg-teal-100 focus:bg-white" placeholder="full name" value={full_name} onChange={updateName} required/>
          </span>

          <span>
            <label htmlFor="mail" className=" block py-2 ">{mail ? "mail" : ""}</label>
            <input type="email" id="mail" className=" py-2 px-4 w-10/12 outline-teal-400 rounded bg-teal-100 focus:bg-white" placeholder="email" value={mail} onChange={updateMail} required/>
          </span>
                
          <span>
            <label htmlFor="key" className=" block py-2 ">{key ? "password" : ""}</label>
            <input type="password" id="key" className=" py-2 px-4 w-10/12 outline-teal-400 rounded bg-teal-100 focus:bg-white" placeholder="password" value={key} onChange={updateKey} required/>
          </span>

          <span>
            <label htmlFor="c_key" className=" block py-2 ">{c_key ? "confirm password" : ""}</label>
            <input type="password" id="c_key" className=" py-2 px-4 w-10/12 outline-teal-400 rounded bg-teal-100 focus:bg-white" placeholder="confirm password" value={c_key} onChange={updateCKey} required/>
          </span>

          <div className="relative w-full h-8 my-4">
            <button className="bg-teal-400 absolute right-0 py-2 px-4">register</button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  )
}