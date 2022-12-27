import React from 'react'
import ComposeUtil from '../../components/dashboard/ComposeUtil'
import { data } from '../../data/Resource'

function Drafts() {
  return (
    <ComposeUtil posts={data} pageName={'Drafts'}/>
  )
}

export default Drafts;