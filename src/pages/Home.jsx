import React from "react"
import Footer from "../partials/footers/Footer"
import Header from "../partials/headers/Header"
import { intro, data } from "../data/Resource"
import Posts from "../components/body/Posts"

function Home() {
  return (
    <div className="bg-teal-400 ">
      <div className="bg-white p-4 rounded-b-3xl pb-6">
        <Header />

        <div className="">
                <h1 className=" font-bold text-3xl py-3 tracking-wider">Home</h1>
                <p className="intro py-3 text-lg">{intro}</p>
                <hr className='border-b-2 border-black mb-5'/>
                <Posts posts={data}/>
                <div>
                    <p className='text-center opacity-75'>-pages-</p>
                </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
