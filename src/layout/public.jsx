import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "../partials/footers/Footer"
import Header from "../partials/headers/Header"

function Public() {
  return (
    <div className="bg-teal-400 ">
      <div className="bg-white p-4 rounded-b-3xl pb-6">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Public
