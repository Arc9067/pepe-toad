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
          <h1 className="font-special text-7xl text-amber-700">Tekonomics</h1>
          <div className="font-special flex-col justify-start items-start gap-[33px] inline-flex">
            <div className="text-white text-[32px] font-normal">
              Total Supply: 1, 000, 000
            </div>
            <div className="text-white text-[32px] font-normal">Tax: 5%</div>
            <div className="text-white text-[32px] font-normal">
              Buy & Sell: 5%
            </div>
            <div className="text-white text-[32px] font-normal">
              Liquidity: 10%
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Mics;
