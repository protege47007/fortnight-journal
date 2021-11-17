import React, { Component } from 'react'
import '../styles/login-styles/login.css'
import Image from './login/Image'
import Mail from './login/Mail'
import Password from './login/Password'
import LoginBtn from './login/LoginBtn'
import Gmail from './login/Gmail'
import Email from './login/Email'

export class Login extends Component {
    render() {
        return (
            <div className="login-pane">
                <Image imgField="img-box" imgId="login-img"/>
                <form 
                action="#" 
                method="post" 
                className="login-form">
                    <Mail 
                    mailField="mail-input" 
                    iconClassName="input-icon" 
                    iconSize='28' mailId="mailAdd"/>
                    <Password 
                    field="key-input" 
                    icon="input-icon" 
                    input="key" 
                    iconSize='28'/>
                    <LoginBtn btnId="login-btn" btnName="Login"/>
                </form>
                <p>
                    <span className="top">
                        or
                    </span>
                    <span className="bottom">
                        sign up with
                    </span>
                </p>
                <form 
                className="signup-form"
                action="#" 
                method="get">
                    <Gmail/>
                    <Email/>
                </form>
            </div>
        )
    }
}

export default Login
