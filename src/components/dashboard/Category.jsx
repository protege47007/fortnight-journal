import React, { useState } from "react"
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md"

function Category({cat_val, setter}) {
  

  const Option = [ "-select one-", "Relationship Takes", "Weird Thoughts", "Movie & TV Reviews"].map((ele, index) => (
    <option value={ele} key={index}>
      {ele}
    </option>
  ))
  
  const [hidden, setHidden] = useState("hidden")
  function addCategory() {
    hidden === "hidden" ? setHidden("") : setHidden("hidden")
  }

  return (
    <div className="py-2 relative">
      <label htmlFor="categories" className="text-xl block">
        Categories
      </label>
      {hidden === "" ? null : (
        <select
          id="categories" value={cat_val} onChange={(e)=>{setter(e.target.value)}}
          className="text-xl my-2 w-6/12 p-2 bg-teal-500 outline-0"
        >
          {Option}
        </select>
      )}

      {/* add onclick func to add new category */}
      {hidden === "" ? null : (
        <MdAddCircleOutline
          size={30}
          className="absolute top-14 left-72 opacity-60 text-teal-500"
          onClick={addCategory}
        />
      )}
      {hidden === "" ? (
        <MdRemoveCircleOutline
          size={30}
          className="absolute top-20 left-[22rem] text-red-500"
          onClick={addCategory}
        />
      ) : null}

      <div className={hidden}>
        <label htmlFor="newCategory" className="text-xl block">
          New Category
        </label>
        <input
          type="text"
          id="newCategory"
          value={cat_val}
          onChange={(e)=>{setter(e.target.value)}}
          className="text-xl border border-solid border-gray-500 p-2 outline-0 focus:border focus:border-solid focus:border-teal-500 focus:border-b-2 w-10/12 my-2"
          required
        />
      </div>
    </div>
  )
}

export default Category
