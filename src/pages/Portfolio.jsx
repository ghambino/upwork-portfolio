import React from "react";
import { portfolioDetails } from "../utility/portfolioDetails";

function Portfolio() {
  return (
    <>
      <div className="h-[30vh] bg-black flex items-center justify-center">
        <h2 className="text-[40px] font-bold text-white">
          Portfolio Projects 🚀
        </h2>
      </div>
      <div className="bg-[#f1f1f1] px-[24px] md:px-[40px] lg:px-[40px] py-[90px]">
        {portfolioDetails.map((unit, index) => (
          <div
            key={index}
            className="lg:mb-[160px] mb-[120px] flex flex-col lg:flex-row items-center gap-[32px] md:gap-[52px] lg:gap-[60px] lg:even:flex-row-reverse"
          >
            <div className={`w-[100%] lg:w-[600px]`}>
              <img src={unit.projectImg} alt="" />
            </div>
            <div className="w-[100%] lg:w-[560px] text-center lg:text-left py-[36px]">
              <div className="">
                <h1 className="uppercase font-bold text-[24px] md:text-[40px]  leading-[38px] md:leading-[44px] tracking-[2px] mb-[24px] md:mb-[32px]">
                  {unit.title}
                </h1>
                <p className="opacity-50 font-medium text-[17px] leading-[25px] mb-[40px]">
                  {" "}
                  {unit.description}
                </p>
                <div className="mb-[50px] flex items-center gap-4 flex-wrap">
                  {unit.techStacks.map((unit, index) => (
                    <button
                      key={index}
                      className="bg-[#0f3d3e] text-white even:text-orange-400 rounded-lg py-[10px] px-[24px] text-[14px]"
                    >
                      {unit}
                    </button>
                  ))}
                </div>
                <a
                  href={unit.liveUrl}
                  target={"_blank"}
                  className="px-[30px] py-[15px] bg-[#ffc23c] text-black text-[15px] uppercase font-bold"
                >
                  check live project 👇
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-[15vh] bg-black flex items-center justify-center">
        <h2 className="text-[20px] font-bold text-white capitalize">
          more amazing projects coming !!!!!
        </h2>
      </div>
    </>
  );
}

export default Portfolio;
