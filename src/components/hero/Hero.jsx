import React from "react";
import hero from "../../assets/hero.png";
import messageIcon from "../../assets/Message 35.png";

export default function Hero() {
  return (
    <div>
      <section className="text-gray-400 bg-black body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font  text-7xl mb-4 font-medium text-white">
              You don’t have to Fight them Alone.
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
              curabitur sodales conubia ut inceptos faucibus himenaeos tortor
              eget, hac massa gravida arcu interdum proin curae.
            </p>

            <div className="w-[438px] h-[74px] bg-gray-900 rounded-[43px] flex justify-between items-center">
              <div className="flex justify-between items-center ml-6 gap-2 opacity-50">
                <img src={messageIcon} alt="" srcset="" />
                <p>Enter your email address</p>
              </div>
              <button className="bg-amber-300 rounded-[43px] text-black font-bold font-['Inter'] p-5">
                Let's Talk
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={hero}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
