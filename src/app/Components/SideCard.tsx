import React from "react";
import Image from "next/image";

const SideCard = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen p-8">
      {/* Left Section - Content */}
      <div className="bg-[#FFF3E3] w-[643px] h-full rounded-[10px] mr-8 p-10 border bottom-1">
        <h4 className="text-black text-lg mb-2 flex justify-start"></h4>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#B88E2F] leading-tight flex justify-start">
          50+ Beautiful rooms <br /> inspiration
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-700 flex justify-start font-bold">
          Our designer already made a lot of beautiful prototipe of rooms that inspire you
        </p>
        <button className="bg-[#B88E2F] hover:bg-white text-black font-semibold py-3 px-8 shadow-lg transition duration-300 border border-[#B88E2F] rounded-md flex justify-start">
          Explore More
        </button>
      </div>

      {/* Right Section - Images */}
      <div className="flex gap-4">
        <div className="flex-1 w-full">
          <Image
            src="/5.png"
            alt="Image 1"
            layout="responsive"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="flex-1 w-full">
          <Image
            src="/25.png"
            alt="Image 2"
            layout="responsive"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SideCard;
