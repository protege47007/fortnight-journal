import React from "react";
import Category from "./formComponents/Category";
import TextArea from "./formComponents/TextArea";
import Input from "./formComponents/Input";

function ComposeForm() {
  

//   add input for image

  return (
    <form className="relative">
        <Input name='Title' id='title' type='text'/>

      <Category/>

      <TextArea name='Post' id='post' placeHolder='Any new inspirations today?'/>

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
