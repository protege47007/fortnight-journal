import React from "react";

function Brand(props) {
  return (
    <>
      <a href="/">
        <h3 className={`text-black font-normal pt-2 pb-4  text-4xl tracking-widest ${props.brandClassName}`}>Fortnight Journal</h3>
      </a>
      <hr className="border-b border-black"/>
    </>
  )
}

export default Brand;
