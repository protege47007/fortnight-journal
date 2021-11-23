import React, { Component } from 'react'

export class TextInput extends Component {
    render() {
        return (
            <div className={this.props.inputClassName}>
                <input 
                type="text" 
                name={this.props.inputName} 
                id={this.props.inputId}
                placeholder={this.props.holder}
                 />
            </div>
        )
    }
}
export default TextInput
