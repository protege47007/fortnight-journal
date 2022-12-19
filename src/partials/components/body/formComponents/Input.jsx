import React from "react";

function Input({name, type, id}) {
  return (
    <div className="py-2 text-xl">
      <label htmlFor={id} className="text-xl block">
        {name}
      </label>
      <input
        type={type}
        id={id}
        className="text-xl border border-solid border-gray-500 p-2 outline-0 focus:border focus:border-solid focus:border-teal-500 focus:border-b-2 w-10/12 my-2"
        required
      />
    </div>
  );
}

export default Input;
