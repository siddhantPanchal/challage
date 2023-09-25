import React from "react";

export default function NewsLetter() {
  return (
    <div className="w-full flex justify-center bg-gray-900 pb-64 pt-8">
      <div className="bg-custom-yellow text-white w-5/6 h-56">
        <section className="flex flex-col items-center justify-evenly h-full">
          <p className="text-4xl">Subscribe Our Newsletter</p>
          <div className="">
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="h-12 w-64 rounded-l-md mr-3 px-8"
            />
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              className="h-12 w-64 mr-3  px-8"
            />
            <button
              type="submit"
              className="h-12 bg-yellow-300 text-black px-6 rounded-e-md"
            >
              SEND
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
