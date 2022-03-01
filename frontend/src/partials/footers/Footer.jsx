import React from 'react';
import Brand from '../headers/components/Brand';
import Nav from '../headers/components/Nav';
import{FaTwitter, FaFacebookF, FaLinkedinIn} from 'react-icons/fa';


function Footer() {
    const date = new Date().getFullYear()
    return (
        <footer className='p-4'>
            <Brand brandClassName="mb-2"/>

            <label htmlFor="footerNav" className="">Site Map</label>
            <Nav id="footerNav"
            navContainer="footer-nav" 
            linkClassName="mt-2" 
            />

            <form action="#" method="post" className='py-6 text-lg relative'>
                <label htmlFor="NewsId" className='py-2 block'>Subscribe to my blog</label>
                <input type="email" name="email" id="NewsId" placeholder="Your email" 
                className='text-2xl p-1 px-2 w-8/12 rounded-2xl'/>
                <input type="submit" value="Subscribe" 
                className='p-1 px-3 text-2xl bg-blue-500 rounded-2xl relative -left-6'/>
            </form>
            <div className=" pb-4 flex justify-center gap-4 ">
                <FaTwitter size={22}/> <FaFacebookF size={22}/> <FaLinkedinIn size={22}/>
            </div>
            <hr />
            <p className="text-center pt-2">
                <span className='px-1'>AKDA</span> 
                <span className="px-2">&copy; All Rights Reserved</span>
                2020 - {date} 
            </p>
        </footer>
    );
}

export default Footer