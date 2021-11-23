import React, { Component } from 'react'
import Brand from './header/Brand'
import Nav from './header/Nav'
import{FaTwitter, FaFacebookF, FaLinkedinIn} from 'react-icons/fa';

export class Footer extends Component {
    render() {
        const date = new Date().getFullYear()
        return (
            <footer>
                <Brand brandClassName="footer-brand"/>

                <label htmlFor="footerNav" className="footer-label">Navigation</label>
                <Nav id="footerNav"
                navContainer="footer-nav" 
                linkClassName="footer-link" 
                />

                <form action="#" method="post">
                    <label htmlFor="NewsId">Subscribe to my blog</label>
                    <input type="email" name="email" id="NewsId" placeholder="Your email"/>
                    <input type="submit" value="Subscribe" />
                </form>
                <div className="contact-icons">
                    <FaTwitter/> <FaFacebookF/> <FaLinkedinIn/>
                </div>
                <hr />
                <p className="footer-text">&copy; AKDA {date} </p>
            </footer>
        )
    }
}

export default Footer
