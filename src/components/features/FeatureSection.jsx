import React from "react";
import gift from "../../assets/gift.png";

export default function FeatureSections() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
            Why Choose us?
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <FeatureSection successRate={98} />
          <FeatureSection successRate={100} />
          <FeatureSection successRate={100} />
        </div>
      </div>
    </section>
  );
}

function FeatureSection({ successRate }) {
  return (
    <div className="p-4 md:w-1/3 feature-card">
      <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col ">
        <div className="flex items-center mb-3">
          <div className=" mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
            <img src={gift} alt="" srcset="" width={100} height={100} />
          </div>
        </div>
        <h2 className="text-white text-lg title-font font-medium">
          {successRate}% Success Rate
        </h2>
        <div className="flex-grow">
          <p className="leading-relaxed text-base">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine.
          </p>
          <button className="text-black bg-yellow-500 px-5 py-3 my-4 rounded-full">
            {" "}
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
