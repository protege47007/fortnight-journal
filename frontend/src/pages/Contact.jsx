import React from 'react'
import Input from '../partials/components/body/formComponents/Input';
import TextArea from '../partials/components/body/formComponents/TextArea';
import Footer from '../partials/footers/Footer';
import Brand from '../partials/headers/components/Brand';
import Nav from '../partials/headers/components/Nav';

function Contact() {
  return (
    <div className='bg-teal-500'>
        <div className='p-4 bg-white rounded-b-3xl pb-8'>
            <Brand/>
            <Nav/>
            <hr className='my-2 border-2 border-teal-500 border-l-0 border-b-0 border-r-0'/>
            <h3 className='text-2xl font-bold py-2'>Contact Us</h3>
            <Input name='Name' type='text' id='name'/>
            <Input name='Email' type='mail' id='mail'/>
            <Input name='Subject' type='text' id='subject'/>
            <TextArea name='Message' id='message' placeHolder='Type your message here...'/>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact;