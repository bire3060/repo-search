import React from "react";
import NothingFoundImg from "../assets/Images/nothingFound.png";


const NothingFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-12">
        <div className="flex flex-col space-y-2 items-center justify-center">
          <div className="h-20 w-20 bg-cover object-cover">
            <img src={NothingFoundImg} alt="nothing_found" />
          </div>
          <div className={`tracking-wide "text-gray-300"`}>
            {`Sorry we could'nt find anything !`}
          </div>
        </div>
      </div>
    </>
  );
};

export default NothingFound;
