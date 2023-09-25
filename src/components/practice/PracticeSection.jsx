import React from "react";
import businessLaw from "../../assets/bussiness.png";
import partnership from "../../assets/partnership.png";
import real_estate from "../../assets/real_estate.png";
import business from "../../assets/bussiness2.png";
import landlord from "../../assets/landlord.png";
import elder from "../../assets/elder.png";

export default function PracticeSection() {
  return (
    <div className="bg-gray-900 body-font text-white">
      <div className="flex flex-col container mx-auto  px-5 py-24  items-center">
        <h1 className="text-4xl">Area of Practices</h1>
        <br />
        <br />
        <br />
        <div className="grid grid-cols-3 gap-4">
          <PracticeArea img={businessLaw} title={"BUSINESS LAW"} isBig={true} />
          <PracticeArea
            img={partnership}
            title={"Partnership LAW"}
            isBig={false}
          />
          <PracticeArea
            img={real_estate}
            title={"REAL ESTATE LAW"}
            isBig={false}
          />
          <PracticeArea img={business} title={"BUSINESS LAW"} isBig={true} />
          <PracticeArea
            img={landlord}
            title={"LANDLORD DISPUTES"}
            isBig={true}
          />
          <PracticeArea img={elder} title={"ELDER ABUSE"} isBig={false} />
        </div>
      </div>
    </div>
  );
}

function PracticeArea({ img, title, isBig = true }) {
  return (
    <div className={`${isBig ? "col-span-2" : ""} relative text-center `}>
      <img src={img} alt="" />
      <p
        className={`absolute top-3/4 ${
          isBig ? "left-1/3" : "left-1/4"
        }  text-2xl`}
      >
        {title}
      </p>
    </div>
  );
}
