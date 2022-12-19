import React from "react";

function Brand(props) {
  return (
    <a href="/">
        <h3 className={`text-black font-normal py-2  text-4xl tracking-widest ${props.brandClassName}`}>Fortnight Journal</h3>
    </a>
  );
}

export default Brand;
