import React from 'react'
import ComposeUtil from '../../components/dashboard/ComposeUtil'
import { data } from '../../data/Resource'

function Trash() {
  return (
    <ComposeUtil posts={data}  pageName={'Trash'}/>
  )
}

export default Trash