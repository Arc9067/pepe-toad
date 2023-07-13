import React from "react";
import Imgs from "../assets/imgs.png";

const Photos = () => {
  return (
    <section className="py-14 w-full bg-yellow-300 text-black flex flex-col items-center gap-12 overflow-scroll ">
      <img src={Imgs} alt="" />

      <div className="container">
        <svg
          width="100%"
          height="12"
          viewBox="0 0 660 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            y1="7"
            x2="660"
            y2="7"
            stroke="#D13517"
            stroke-opacity="0.54"
            stroke-width="4"
          />
          <line
            x1="80"
            y1="6"
            x2="156"
            y2="6"
            stroke="#D13517"
            stroke-width="12"
          />
        </svg>
      </div>
    </section>
  );
};

export default Photos;
