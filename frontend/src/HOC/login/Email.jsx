import React, { Component } from 'react'
import {FaEnvelope} from 'react-icons/fa';
export class Email extends Component {
    render() {
        return (
            <button className="mail-btn">
                <FaEnvelope size='20px' className="m-icon"/> Mail
            </button>
        )
    }
}

export default Email
