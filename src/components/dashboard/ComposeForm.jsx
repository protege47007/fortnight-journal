import React, { useState } from "react"
import Category from "./Category"
import EditorJS from '@editorjs/editorjs'

function ComposeForm() {
  const [title, setTitle] = useState("")
  const [cat_val, setCat_val] = useState("")
  const [article, setArticle] = useState("")

  const editor = new EditorJS({
    /**
     * Id of Element that should contain Editor instance
     */
    holder: 'post'
  })

  editor.isReady
  .then(() => {
    console.log('Editor.js is ready to work!')
    /** Do anything you need after editor initialization */
  })
  .catch((reason) => {
    console.log(`Editor.js initialization failed because of ${reason}`)
  })

  return (
    <form className="relative border border-black  mb-10">
      <div className="py-2 text-xl">
        <label htmlFor="title" className="text-xl block">Title</label>
        <input type="text" id="title" value={title} onChange={(e) => {setTitle(e.target.value)}} 
          className="text-xl border border-solid border-gray-500 p-2 outline-0 focus:border focus:border-solid focus:border-teal-500 focus:border-b-2 w-11/12 my-2"
          required
        />
      </div>
      <Category value={cat_val} setter={setCat_val}/>

      <div className="py-2">
        <label htmlFor="post" className="text-xl block">Post</label>
        <textarea id="post"
          className="text-xl border border-solid border-gray-500 p-3 w-11/12 h-96 outline-0 focus:border focus:border-solid focus:border-teal-500 focus:border-b-2 resize-none"
          placeholder="Any new inspirations today?"
          value={article}
          onChange={(e)=>{setArticle(e.target.value)}}
          required
        ></textarea>
      </div>


      <button className="text-xl py-1 px-3 m-1 border border-gray-500 rounded-md">
        save as draft
      </button>
      <button
        type="submit"
        className="text-xl py-1 px-3 m-1 border-2 border-teal-500 bg-teal-500 rounded-md absolute left-[15.5rem]"
      >
        publish
      </button>
    </form>
  );
}

export default ComposeForm;
