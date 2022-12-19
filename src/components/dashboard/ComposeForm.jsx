import React from "react"
import Category from "./Category"

function ComposeForm() {
  

//   add input for image

  return (
    <form className="relative">
      <div className="py-2 text-xl">
        <label htmlFor="title" className="text-xl block">Title</label>
        <input type="text" id="title" 
          className="text-xl border border-solid border-gray-500 p-2 outline-0 focus:border focus:border-solid focus:border-teal-500 focus:border-b-2 w-10/12 my-2"
          required
        />
      </div>
      <Category/>

      <div className="py-2">
        <label htmlFor="post" className="text-xl block">Post</label>
        <textarea id="post"
          className="text-xl border border-solid border-gray-500 p-3 w-10/12 h-96 outline-0 focus:border focus:border-solid focus:border-teal-500 focus:border-b-2 resize-none"
          placeholder="Any new inspirations today?"
          required
        ></textarea>
      </div>


      <button className="text-xl py-1 px-3 m-1 border border-gray-500 rounded-md">
        save as draft
      </button>
      <button
        type="submit"
        className="text-xl py-1 px-3 m-1 border-2 border-gray-500 bg-teal-500 font-bold rounded-md absolute left-[15.5rem]"
      >
        publish
      </button>
    </form>
  );
}

export default ComposeForm;