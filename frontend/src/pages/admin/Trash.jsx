import React from 'react'
import Posts from '../../partials/components/body/Posts';
import ComposeNav from '../../partials/components/ComposeNav';
import ComposeHeader from '../../partials/headers/ComposeHeader';
import {data} from '../../partials/components/store/Resource';
import FooterMin from '../../partials/footers/FooterMin';

function Trash() {
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

export default Trash;