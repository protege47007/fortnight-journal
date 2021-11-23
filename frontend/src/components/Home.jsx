import React, { Component } from 'react'
import "../styles/homepage/home.css";
import Index from './body/Index'
import Footer from './Footer'
import Header from './header/Header'

export class Home extends Component {
    render() {
        
        
          
        return (
            <>
            <div className="home-pane">
                <Header />

                <Index/>
                
            </div>
            <Footer />
            </>
        )
    }
}

export default Home
