import React, { Component } from 'react'
import {FaKey} from 'react-icons/fa';
export class Password extends Component {
    render() {
        return (
            <div 
            className={this.props.field}>
                <FaKey 
                className={this.props.icon} 
                size={this.props.iconSize} />
                <input 
                type="password" 
                name="key" 
                id={this.props.input} />
            </div>
        )
    }
}

export default Password;
