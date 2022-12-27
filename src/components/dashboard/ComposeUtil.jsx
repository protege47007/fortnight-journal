import React from 'react';
import FooterMin from '../footer/FooterMin';
import ComposeHeader from './ComposeHeader';
import ComposeNav from './ComposeNav';
import Posts from '../body/Posts';

function ComposeUtil({posts, pageName}) {
  return (
    <div className="container  bg-teal-500 ">
        <div className='bg-white p-4 rounded-b-3xl pb-8'>
        <ComposeHeader/>
        <ComposeNav />
        <h1 className='text-2xl font-bold py-2'>{pageName}</h1>
        <Posts posts={posts}/>
        </div>
        <FooterMin/>
    </div>
  )
}

export default ComposeUtil;