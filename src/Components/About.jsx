import React from "react";
import Image1 from "../assets/aboutImg1.png";
import Image2 from "../assets/aboutImg2.png";

const About = () => {
  return (
    <section className="py-24 ">
      <div className="container relative flex flex-col gap-9 justify-center items-center">
        <img
          src={Image1}
          alt=""
          className="lg:absolute top-0 left-0 lg:rotate-[-51.79deg]"
        />
        <article className="flex items-center justify-center flex-col text-center gap-5">
          <h2 className="text-white text-3xl font-special">KNOW ABOUT US</h2>
          <h1 className="text-white text-7xl font-special">PEPE AND TOAD</h1>
          <div className="text-center text-white text-2xl font-normal max-w-2xl">
            Pepe and Toad the memecoin Launched on the ethereum. Our mission is
            to provide a fun, community-driven investment opportunity that
            celebrates the power of memes and pop culture. With a vision to
            become the leading memecoin in the market, we believe Pepe and Toad
            is the perfect addition to any investor’s portfolio. Join us on this
            journey to revolutionize the world of memecoins!
          </div>
          <a
            href=""
            className="w-[173px] h-[60px] px-8 py-4 bg-orange-400 rounded shadow justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-white text-xl font-special leading-7 tracking-tight">
              BUY NOW
            </div>
          </a>
        </article>
        <img
          src={Image2}
          alt=""
          className="lg:absolute top-0 right-0 lg:rotate-[26.60deg] lg:w-[249.76px]"
        />
      </div>
    </section>
  );
};

export default About;
