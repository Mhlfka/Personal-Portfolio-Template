  import React from "react";
  import graduateDatas from "../data/graduatePlace.json";

  function Graduate() {
    return (
      <div>
        <div className="bg-[#d4d4d4] py-[5%]">
          <div
            id="title-container"
            className="flex flex-row justify-between px-[5.7%] gap-[25%]"
          >
            <div id="sub-titles-one">
              <p className="font-brunoAce xs:text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-black">
                Education
              </p>
              <p className="font-bold text-xs xs:text-xs sm:text-sm md:text-xl lg:text-2xl text-black">
                学習
              </p>
            </div>  
            <div
              id="sub-titles-two"
              className="font-brunoAce xs:text-2xl sm:text-2xl md:text-3xl lg:text-5xl"
            >
              <p className="text-black">places of graduation</p>
            </div>
          </div>

          <div className="font-brunoAce xs:text-2xl sm:text-2xl md:text-3xl lg:text-5xl">
            <ul className="px-4">  
              {graduateDatas.map((graduateData) => (
                <li key={graduateData.id} className="border-b border-black pt-[5%]">
                  {graduateData.place} {graduateData.years}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  export default Graduate;
