import React from "react";
import Logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section
      className="py-24 w-full min-h-screen flex justify-center items-center"
      id="hero"
    >
      <div className="container flex items-center flex-col gap-5">
        <h1 className="text-6xl text-center md:text-9xl font-special">
          Pepe <span className="text-yellow-400">and</span> Toad
        </h1>
        <img src={Logo} alt="" />
      </div>
    </section>
  );
};

export default Hero;
