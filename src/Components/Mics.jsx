import React from "react";

const Mics = () => {
  return (
    <section
      className="py-20 w-full flex justify-center items-center min-h-screen"
      id="tokenomics"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 ">
        <div className=""> </div>
        <article className="flex flex-col gap-9">
          <h1 className="font-special text-7xl text-amber-700">Tokenomics</h1>
          <div className="font-special flex-col justify-start items-start gap-[33px] inline-flex">
            <div className="text-white text-[32px] font-normal">
              Total Supply: 201600000
            </div>
            <div className="text-white text-[32px] font-normal">Tax: 1%</div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Mics;
