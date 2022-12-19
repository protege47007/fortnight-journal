import React from "react";

function TextArea({name, id, placeHolder}) {
  return (
    <div className="py-2">
      <label htmlFor={id} className="text-xl block">
        {name}
      </label>
      <textarea
        type="text"
        id={id}
        className="text-xl border border-solid border-gray-500 p-3 w-10/12 h-96 outline-0 focus:border focus:border-solid focus:border-teal-500 focus:border-b-2 resize-none"
        placeholder={placeHolder}
        required
      ></textarea>
    </div>
  );
}

export default TextArea;
