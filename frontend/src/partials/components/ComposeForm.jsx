import React from "react";
import Category from "./body/formComponents/Category";
import TextArea from "./body/formComponents/TextArea";
import Title from "./body/formComponents/Title";

function ComposeForm() {
  

//   add input for image

  return (
    <form className="relative">
        <Title/>

      <Category/>

      <TextArea/>

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
