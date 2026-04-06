import React from "react";
import Bnr from "../assets/bnr.jpg";

function Profile() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-t from-black to-[#4E4D4D] pt-[3%] pb-[7%]">
      <img src={Bnr} alt="Bnr" className="w-full max-w-[500px] rounded-3xl"/>
      <div className="max-w-[1086px] w-full text-wrap text-[#b8b8b8] py-[50px] px-[85px] font-brunoAce  xs:text-xs sm:text-sm md:text-lg lg:text-2xl">
        <p>
          <span className="font-brunoAce xs:text-xs sm:text-sm md:text-xl lg:text-3xl text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </span>
          <br />
          <br />
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. 
          <br />
          <br />
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
          <br />
          <br />
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>
    </div>
  );
}

export default Profile;
