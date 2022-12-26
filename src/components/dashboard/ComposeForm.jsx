import React, { useState, useEffect } from "react"
import Category from "./Category"
import EditorJS from '@editorjs/editorjs'
import config from "./editor/config"

function ComposeForm() {
  const [title, setTitle] = useState("")
  const [cat_val, setCat_val] = useState("")
  const [editor, setEditor] = useState("")

  
  useEffect(() => {
    editor === "" && setEditor( () => new EditorJS(config))   
    
    
    
  }, [])

  if (editor !== "") {
    editor.isReady
    .then(() => {
      console.log('Editor.js is ready to work!')
      /** Do anything you need after editor initialization */
    })
    .catch((reason) => {
      console.log(`Editor.js initialization failed because of ${reason}`)
    })
  }
  
  
  

  function saveProgress(e){
    e.preventDefault()

    editor.save().then((outputData) => {
      console.log('Article data: ', outputData)
    }).catch((error) => {
      console.log('Saving failed: ', error)
    })
  }

  return (
    <form className="relative border border-black  mb-10 py-4">
      <div className="py-2 text-xl">
        <label htmlFor="title" className="text-xl block">Title</label>
        <input type="text" id="title" value={title} onChange={(e) => {setTitle(e.target.value)}} 
          className="text-xl border border-solid border-gray-500 p-2 outline-0 focus:border focus:border-solid focus:border-teal-500 focus:border-b-2 w-11/12 my-2"
        />
      </div>
      <Category value={cat_val} setter={setCat_val}/>

      <div className="py-2">
        <label htmlFor="post" className="text-xl block">Post</label>
        <div id="post" className="relative text-xl border border-solid border-gray-500 p-3 w-11/12 h-96 overflow-hidden overflow-y-auto overflow-x-auto"></div>
      </div>

      <button onClick={saveProgress} className="text-xl py-1 px-3  border border-gray-500 rounded-md">save progress fish</button>
      <button className="text-xl py-1 px-3  border border-gray-500 rounded-md">
        save as draft
      </button>
      <button
        type="submit"
        className="text-xl py-1 px-3 border-2 border-teal-500 bg-teal-500 rounded-md absolute left-[15.5rem]"
      >
        publish
      </button>
    </form>
  );
}

export default ComposeForm;
