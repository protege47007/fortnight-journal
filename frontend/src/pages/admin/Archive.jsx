import React from 'react';
import ComposeUtil from '../../partials/components/body/ComposeUtil';
import {data} from '../../partials/components/store/Resource';

function Archive() {
  return (
    <ComposeUtil posts={data} pageName={'Archive'}/>
  )
}

export default Archive;