import React from 'react'

function Posts(props) {
    const  data = props.posts;
    const datum  = data.map((datum, index) => 
        <div className="post py-2 my-2 border border-solid border-x-0" key={index}>
            <h4 className="title font-bold">{datum.title}</h4>
            <p className="content">{datum.body}</p>
            <span className='text-blue-600'>...read more</span>
        </div>
        );
    return (
        <div className="post-pane text-base tracking-wide">
            {datum}
        </div>
    )
}

export default Posts