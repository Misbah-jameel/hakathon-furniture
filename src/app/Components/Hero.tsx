"use client";
// import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{ 
        backgroundImage: "url('/background.png')", // Replace with your image URL
        backgroundSize: "cover",  // This ensures the background image covers the full section
        backgroundPosition: "center",  // Centers the image
      }}
    >
      {/* Overlay (optional, for better readability) */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Box */}
      <div className='relative z-10 max-w-7xl mx-auto min-h-[600px] flex items-center justify-center md:justify-end md:w-full w-[95%]'>
        <div className=' bg-[#FFF3E3] bg-opacity-90 p-8 md:p-12 lg:p-16 max-w-2xl'>
          <span className='text-gray-900 text-sm lg:text-base tracking-widest mb-4 block font-semibold '>
            New Arrival
          </span>
          <h1 className="text-[#B88A44] text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6 leading-tight font-poppinsSemiBold">
            Discover Our <br /> New Collection
          </h1>
<p className="text-gray-700 text-base lg:text-lg mb-8 ">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
</p>
          <button className='inline-block bg-[#B88A44] text-white px-12 py-4 text-sm lg:text-base font-poppinsSemiBold hover:bg-[#FFFF]  transition-colors duration-300'>BUY NOW</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
