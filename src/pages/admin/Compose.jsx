import React from "react"
import ComposeForm from "../../components/dashboard/ComposeForm"
import ComposeNav from "../../components/dashboard/ComposeNav"
import FooterMin from "../../components/footer/FooterMin"
import ComposeHeader from "../../components/dashboard/ComposeHeader"

function Compose() {
  return (
    <div className=" bg-teal-500 ">
      <div className="p-4 bg-white rounded-b-3xl">
        <ComposeHeader />
        <ComposeNav />
        <ComposeForm />
      </div>
      <FooterMin />
    </div>
  )
}

export default Compose
