import React, { Component } from 'react'

export class Brand extends Component {
    render() {
        return (
            <h3 
            className={`brand ${this.props.brandClassName}`}>
                Fortnight Journal
            </h3>
        );
    }
}

export default Brand
