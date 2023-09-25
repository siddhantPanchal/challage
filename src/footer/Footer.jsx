import React from "react";
import logo from "../assets/logo.png";
import insta from "../assets/social_media/insta.png";
import twitter from "../assets/social_media/twitter.png";
import pintrest from "../assets/social_media/pintrast.png";
import facebook from "../assets/social_media/facebook.png";

export default function Footer() {
  return (
    <footer className="text-white bg-black body-font pt-24 pb-20">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        <a
          href="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <img src={logo} alt="logo" srcset="" />
          <span className="ml-3 text-xl">IGSTUDIO</span>
        </a>
        <nav className="flex items-center text-base justify-between gap-20">
          <a href="/" className="mr-5 ">
            Home
          </a>
          <a href="/" className="mr-5 hover:text-white">
            Attorneys
          </a>
          <a href="/" className="mr-5 hover:text-white">
            Practice Areas
          </a>
          <a href="/" className="hover:text-white">
            About Us
          </a>
        </nav>
        <div className="flex items-center gap-4 ">
          <img src={insta} alt="" srcset="" />
          <img src={facebook} alt="" srcset="" />
          <img src={twitter} alt="" srcset="" />
          <img src={pintrest} alt="" srcset="" />
        </div>
      </div>
      <div className="mb-24"></div>
      <div className="flex justify-center gap-8 items-center">
        <section>© 2020 Acme. All rig</section>
        <section>Privacy Policy</section>
        <section>Terms of Service</section>
      </div>
    </footer>
  );
}
