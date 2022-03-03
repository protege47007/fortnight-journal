import React from "react";

function Title() {
  return (
    <div className="py-2 text-xl">
      <label htmlFor="title" className="text-xl block">
        Title
      </label>
      <input
        type="text"
        id="title"
        className="text-xl border border-solid border-gray-500 p-2 outline-0 focus:border focus:border-solid focus:border-teal-500 focus:border-b-2 w-10/12 my-2"
        required
      />
    </div>
  );
}

export default Title;
