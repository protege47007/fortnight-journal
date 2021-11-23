import React, { Component } from 'react'
import '../styles/login-styles/signup.css'
import Image from './login/Image'
import Mail from './login/Mail'
import Password from './login/Password'
import LoginBtn from './login/LoginBtn'
import TextInput from './login/TextInput'

export class Signup extends Component {
    render() {
        return (
            <div className="signup-pane">
                <Image imgField="img-box" imgId="login-img"/>
                <form 
                action="#" 
                method="post" 
                className="signup-form">
                    <TextInput 
                    inputClassName="first" 
                    holder="First name"
                    inputName="firstname"
                    inputId="firstName"
                    />

                    <TextInput 
                    inputClassName="last" 
                    holder="Last name"
                    inputName="lastname"
                    inputId="lastName"
                    />

                    <Mail 
                    mailField="signup-mail-input" 
                    iconClassName="input-icon" 
                    iconSize='28' 
                    holder="E-Mail Address"
                    mailId="signUpMailAdd"/>
                    
                    <Password 
                    field="signup-key" 
                    icon="input-icon" 
                    input="auth" 
                    iconSize='28'
                    holder="Password"
                    name="key"
                    />


                    <Password 
                    field="signup-key" 
                    icon="input-icon" 
                    input="confirm-auth" 
                    iconSize='28'
                    holder="Confirm Password"
                    name="confirmKey"
                    />
                    
                    <LoginBtn 
                    btnId="login-btn" 
                    btnName="Sign Up"/>
                </form>
            </div>
        )
    }
}

export default Signup
