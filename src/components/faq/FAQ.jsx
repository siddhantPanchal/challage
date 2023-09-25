import React, { useState } from "react";
import expand from "../../assets/expand.png";

export default function FAQ() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-row justify-between text-center w-full mb-2">
          <h1 className="text-4xl text-white">FAQ</h1>
        </div>
        <div className="grid grid-cols-2">
          <div>
            Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor
            do amet sint.
          </div>
          <div>
            <Accordion
              title={"Do I need a personal injury report?"}
              defaultExpanded
            />
            <br />
            <Accordion title={"How much is my case worth?"} />
            <br />
            <Accordion title={"What should I do right after car accident"} />
            <br />
            <Accordion title={"How much is my case worth?"} />
            <br />
          </div>
        </div>
      </div>
    </section>
  );
}

const Accordion = ({ title, defaultExpanded = false }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="text-white text-3xl">{title}</div>
        <button
          onClick={() => {
            setExpanded((expanded) => !expanded);
          }}
        >
          <img src={expand} alt="" srcset="" />
        </button>
      </div>
      <br />
      {expanded && (
        <>
          <div>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </div>
          <br />
        </>
      )}

      <div className="w-full border border-gray-700 h-[1px]"></div>
    </div>
  );
};
