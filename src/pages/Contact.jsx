import React, { useState } from 'react'
import Footer from '../partials/footers/Footer'
import Brand from '../partials/headers/components/Brand'
import Nav from '../partials/headers/components/Nav'

function Contact() {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [subject, setSub] = useState("")
  const [msg, setMsg] = useState("")

  function updateInput(e, setter){
    setter(e.target.value)
  }

  const form_inputs = [ 
    {id: "name", type: "text", setter: setName, ctrl_value: name},
    {id: "mail", type: "email", setter: setMail, ctrl_value: mail},
    {id: "subject", type: "text", setter: setSub, ctrl_value: subject},
  ]

  return (
    <div className='bg-teal-500'>
        <div className='p-4 bg-white rounded-b-3xl pb-8'>
            <Brand/>
            <Nav/>
            <hr className='my-2 border-2 border-teal-500 border-l-0 border-b-0 border-r-0'/>
            <h3 className='text-2xl font-bold py-2'>Contact Us</h3>
            <div className='px-4 mb-10'>
              {form_inputs.map( ({id, type, setter, ctrl_value}) => (
              <div className="py-2 text-xl" key={id}>
                <label htmlFor={id} className="text-xl block">
                  {id}
                </label>
                <input
                  type={type}
                  id={id}
                  className="text-xl border border-solid border-gray-500 p-2 outline-0  focus:border-teal-500 focus:border-b-2 w-10/12 my-2"
                  required
                  value={ctrl_value}
                  onChange={(e)=>{updateInput(e, setter)}}
                />
              </div>))}
              
              <div className="py-2">
                <label htmlFor="message" className="text-xl block">
                  Message                </label>
                <textarea
                  type="text"
                  id="message"
                  className="text-xl border border-solid border-gray-500 p-3 w-10/12 h-96 outline-0 focus:border focus:border-solid focus:border-teal-500 focus:border-b-2 resize-none"
                  placeholder="Type your message here..."
                  required
                  value={msg}
                  onChange={(e)=>{updateInput(e, setMsg)}}
                ></textarea>

                <button className='mt-5 py-2 px-4 bg-teal-500 border border-teal-500 hover:bg-white '>send message</button>
              </div>
              
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact;