import React, { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import Brand from "./components/Brand";
import Nav from "./components/Nav";

function ComposeHeader() {
  const [first, setFirst] = useState({ state: true, close: "hidden", ham: "" });

  function navMagic() {
    if (first.state) {
      setFirst({
        state: false,
        close: "",
        ham: "hidden",
      });
    } else {
      setFirst({
        state: true,
        close: "hidden",
        ham: "",
      });
    }
  }

  return (
    <header className="relative ">
      <Brand />
      <FaHamburger
        size={28}
        className={`my-2 ${first.ham} `}
        onClick={navMagic}
      />
      <MdOutlineClose
        size={28}
        onClick={navMagic}
        className={`${first.close} absolute left-72`}
      />
      <Nav linkClassName={`${first.close} `} />
    </header>
  );
}

export default ComposeHeader;
