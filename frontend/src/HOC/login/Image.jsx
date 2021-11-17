import React, { Component } from 'react'
import img from "../../images/seller.png"
export class Image extends Component {
    render() {
        return (
            <div className={this.props.imgField}>
                <img src={img} alt="user" id={this.props.imgId} />
            </div>
        )
    }
}

export default Image
