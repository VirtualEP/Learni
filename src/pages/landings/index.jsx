import React from "react";
import { Link } from "react-router-dom";
import { About, Hero, Navbar, Programs, Teams } from "../../components";
import Footer from "../../components/landing/Footer";

export default function Landings() {
  return (
    <div className="flex-1 w-screen bg-white">
      {/* header bar */}
      <header className="py-10">
        <div className=" flex items-center mx-auto">
          <Navbar />
        </div>
      </header>
      <Hero />
      <Teams />
      <About />
      <Programs />
      <Footer />
    </div>
  );
}
