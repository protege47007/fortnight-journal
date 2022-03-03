import React from 'react';
import ComposeUtil from '../../partials/components/body/ComposeUtil';
import {data} from '../../partials/components/store/Resource';

function Trash() {
  return (
    <ComposeUtil posts={data}  pageName={'Trash'}/>
  )
}

export default Trash;