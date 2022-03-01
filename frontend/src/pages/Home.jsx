import React from "react";
import Index from "../partials/components/body/Index";
import Footer from "../partials/footers/Footer";
import Header from "../partials/headers/Header";

function Home() {
  return (
    <div className="bg-teal-400 ">
      <div className="bg-white p-4 rounded-b-3xl pb-6">
        <Header />

        <Index />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
