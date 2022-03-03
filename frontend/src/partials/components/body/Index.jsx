import React from 'react'
import Posts from './Posts';
import {data} from '../store/Resource'

function Index() {
    
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