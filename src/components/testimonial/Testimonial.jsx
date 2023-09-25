import React from "react";
import john from "../../assets/john.png";
import devon from "../../assets/devon.png";
import robert from "../../assets/rabort.png";
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";

export default function Testimonial() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-row justify-between text-center w-full mb-20">
          <h1 className="text-4xl text-white">
            What says our <br /> happy Clients
          </h1>
          <div>
            <button className="mr-3">
              <img src={leftArrow} alt="" srcset="" />
            </button>

            <button>
              <img src={rightArrow} alt="" srcset="" />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <FeatureSection name={"Jane Cooper"} image={john} />
          <FeatureSection name={"Devon Lane"} image={devon} />
          <FeatureSection name={"Robert Fox"} image={robert} />
        </div>
      </div>
    </section>
  );
}

function FeatureSection({ image, name }) {
  return (
    <div className="p-4 md:w-1/3 feature-card">
      <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col ">
        <div className="flex items-center mb-3">
          <div className=" mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
            <img src={image} alt="" srcset="" width={100} height={100} />
          </div>
        </div>
        <h2 className="text-white text-2xl">{name}</h2>
        <div className="flex-grow">
          <p className="leading-relaxed text-white text-lg">Ceo of hunt</p>
          <br />
          <p className="leading-relaxed text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
            dolor do amet sint. Velit officia
          </p>
        </div>
      </div>
    </div>
  );
}
