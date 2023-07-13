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
          <h1 className="text-white text-7xl font-special">Toads Tale</h1>
          <div className="text-center text-white text-2xl font-normal max-w-2xl">
            In a lush green forest there lived a wise frog named Toad. Toad was
            known for his ability to communicate with all the creatures of the
            forest. He was respected and admired by everyone, including his
            friend Pepe, a mischievous and playful little frog. <br />
            <br />
            Toad was much bigger than the other amphibians but had a lot to
            learn from Pepe the frog. Toad approached him with a curious look on
            his face, “can you help me with something?” <br />
            <br />
            Pepe smiled warmly at Toad and replied, "Of course, my dear friend”
            then the journey began.
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
