import React from 'react';
import {data} from '../../partials/components/store/Resource';
import Posts from '../../partials/components/body/Posts';
import ComposeNav from '../../partials/components/ComposeNav';
import FooterMin from '../../partials/footers/FooterMin';
import ComposeHeader from '../../partials/headers/ComposeHeader';

function Archive() {
  return (
    <div className="container  bg-teal-500 ">
        <div className='bg-white p-4 rounded-b-3xl'>
        <ComposeHeader/>
        <ComposeNav/>
        <Posts posts={data}/>
        </div>
        <FooterMin/>
    </div>
  )
}

export default Archive;