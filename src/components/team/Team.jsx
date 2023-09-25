import React from "react";

const members = [
  {
    name: "Danial Def",
    image: require("../../assets/team_members/Danial_Def.png"),
    cases: 301,
  },
  {
    name: "Sanfole",
    image: require("../../assets/team_members/Sanfole.png"),
    cases: 850,
  },
  {
    name: "Cesforila",
    image: require("../../assets/team_members/Cesforila.png"),
    cases: 470,
  },
  {
    name: "Colleen",
    image: require("../../assets/team_members/Colleen.png"),
    cases: 180,
  },
  {
    name: "Haldone",
    image: require("../../assets/team_members/Haldone.png"),
    cases: 212,
  },
  {
    name: "Nik Jeo",
    image: require("../../assets/team_members/Nik_Jeo.png"),
    cases: 350,
  },
];

export default function Team() {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-5xl mb-4 text-white">Our Team</h1>
          </div>
          <div class="flex flex-wrap -m-2">
            {members.map(({ name, image, cases }, index) => {
              return (
                <TeamMember
                  key={index}
                  name={name}
                  cases={cases}
                  image={image}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function TeamMember({ image, name, cases }) {
  return (
    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
        <img
          alt="team"
          class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
          src={image}
        />
        <div class="flex-grow">
          <h2 class="text-white title-font font-medium">{name}</h2>
          <p class="text-gray-600">{`${cases} Cases`}</p>
        </div>
      </div>
    </div>
  );
}
