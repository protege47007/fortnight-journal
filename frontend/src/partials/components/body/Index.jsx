import React from 'react'
import Posts from './Posts';

function Index() {
    const data = [
        {
            id: "001",
            title: "Hello World",
            body: "Dramatically strategize user-centric potentialities without top-line expertise. Credibly fashion wireless niches whereas business interfaces. Monotonectally actualize functionalized alignments before plug-and-play.",
            timeStamp: "October 29th, 2021. 17:30",
            commentsCount: 69,
            likesCount: 146
        },
        {
            id: "002",
            title: "Hello World Again.",
            body: "Dramatically strategize user-centric potentialities without top-line expertise. Credibly fashion wireless niches whereas business interfaces. Monotonectally actualize functionalized alignments before plug-and-play.",
            timeStamp: "May 18th, 2021. 14:05",
            commentsCount: 47,
            likesCount: 100
        },
        {
            id: "003",
            title: "Hello World 3.0",
            body: "Dramatically strategize user-centric potentialities without top-line expertise. Credibly fashion wireless niches whereas business interfaces. Monotonectally actualize functionalized alignments before plug-and-play.",
            timeStamp: "September 30th, 2021. 12:30",
            commentsCount: 16,
            likesCount: 2
        }
    ]
    return (
        <div className="main-container">
                <h1 className="active-header font-bold text-3xl py-3 tracking-wider">Home</h1>
                <p className="intro py-3 text-lg">Hi👋, welcome to the fortnight journal. My name is David, I am a software developer. This is a compilation of subjects I have found intriguing, do enjoy.</p>
                <hr className='border-2 border-solid border-l-0 border-r-0 border-t-0'/>
                <Posts posts={data}/>
                <div>
                    <p className='text-center opacity-75'>-pages-</p>
                </div>
        </div>
    );
}

export default Index;