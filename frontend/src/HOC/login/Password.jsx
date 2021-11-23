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
                name={this.props.name} 
                className={this.props.input}
                placeholder={this.props.holder} 
                />
            </div>
        )
    }
}

export default Password;
