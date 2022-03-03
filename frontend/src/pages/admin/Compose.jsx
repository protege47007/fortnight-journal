import React from "react";
import ComposeForm from "../../partials/components/body/ComposeForm";
import ComposeNav from "../../partials/components/body/ComposeNav";
import FooterMin from "../../partials/footers/FooterMin";
import ComposeHeader from "../../partials/headers/ComposeHeader";

function Compose() {
  return (
    <div className="container  bg-teal-500 ">
      <div className="p-4 bg-white rounded-b-3xl">
        <ComposeHeader />
        <ComposeNav />
        <ComposeForm />
      </div>
      <FooterMin />
    </div>
  );
}

export default Compose;
