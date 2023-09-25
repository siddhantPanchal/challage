import React from "react";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="text-white bg-black body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <img src={logo} alt="logo" srcset="" />
          <span className="ml-3 text-xl">IGSTUDIO</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="/" className="mr-5 ">
            Home
          </a>
          <a href="/" className="mr-5 hover:text-white">
            Attorneys
          </a>
          <a href="/" className="mr-5 hover:text-white">
            Practice Areas
          </a>
          <a href="/" className="mr-5 hover:text-white">
            About Us
          </a>
        </nav>
        <button className="py-2 px-5 border-2">Contact Now</button>
      </div>
    </header>
  );
}
