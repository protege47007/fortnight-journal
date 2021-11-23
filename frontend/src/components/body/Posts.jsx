import React, { Component } from 'react'

export class Posts extends Component {
    render() {
        const  data = this.props.posts;
        const datum  = data.map((datum, index) => 
            <div className="post" key={index}>
                <h4 className="title">{datum.title}</h4>
                <p className="content">{datum.body}</p>
            </div>
            );
        return (
            <div className="post-pane">
                {datum}
            </div>
        )
    }
}

export default Posts;
