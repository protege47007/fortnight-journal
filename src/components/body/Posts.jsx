import React from 'react'

function Posts(props) {
    const  data = props.posts;
    const datum  = data.map((datum, index) => 
        <div className="post my-5 border border-teal-400 border-x-0 [box-shadow:0px_5px_6px_-3px_gray] p-2" key={index}>
            <h4 className="text-lg font-bold">{datum.title}
                <span className="text-gray-500 text-xs block my-2">posted: {datum.time_stamp}</span>
            </h4>
            <p className="content">{datum.body}</p>
            <span className='text-blue-600'>...read more</span>
        </div>
        );
    return (
        <div className="my-10 text-base tracking-wide">
            {datum}
        </div>
    )
}

export default Posts