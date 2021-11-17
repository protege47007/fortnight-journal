import React, { Component } from 'react'
import {FaAt} from 'react-icons/fa';
export class Mail extends Component {
    render() {
        return (
            <div className={this.props.mailField}>
                <FaAt 
                className={this.props.iconClassName}  
                size={this.props.iconSize}/>
                <input 
                type="email" 
                name="mail" 
                id={this.props.mailId} />
            </div>
        )
    }
}

export default Mail
