import React from 'react'
import ComposeUtil from '../../components/dashboard/ComposeUtil'
import { data } from '../../data/Resource'

function Archive() {
  return (
    <ComposeUtil posts={data} pageName={'Archive'}/>
  )
}

export default Archive;