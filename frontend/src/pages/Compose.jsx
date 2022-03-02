import React  from "react";
import ComposeForm from "../partials/components/ComposeForm";
import ComposeNav from "../partials/components/ComposeNav";
import ComposeHeader from "../partials/headers/ComposeHeader";



function Compose() {
  

  return (
    <div className="container p-4 ">
      <ComposeHeader/>
      <ComposeNav/>
      <ComposeForm/>
    </div>
  );
}

export default Compose;
