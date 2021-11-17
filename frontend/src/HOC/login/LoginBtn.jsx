import React, { Component } from 'react'

export class LoginBtn extends Component {
    render() {
        return (
            <button id={this.props.btnId}>
                {this.props.btnName}
            </button>
        )
    }
}

export default LoginBtn
