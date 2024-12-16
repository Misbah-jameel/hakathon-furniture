"use client";
import React from "react";
import Image from "next/image";

const ContentWithCard = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center bg-gray-200 rounded-lg">
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 pr-8 bg-gray-300 p-6 rounded-lg mb-8 lg:mb-0 flex flex-col justify-between h-full">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Collection</h2>
          <p className="text-gray-600 text-lg mb-6">
            Discover a variety of furniture and home decor that will elevate your living spaces. From elegant dining sets to cozy living room sofas, we have it all.
          </p>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg focus:outline-none hover:bg-yellow-400 transition">
            Shop Now
          </button>
        </div>

        {/* Right Side Card */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-between h-full">
          <Image
            src="/image6.png" // Replace with your image
            alt="Furniture"
            className="w-64 h-64 object-cover rounded-lg mb-4"
            width={256}
            height={256}
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Modern Sofa</h3>
          <p className="text-gray-600 text-sm mb-4">
            A modern and stylish sofa that will add elegance to any living room.
          </p>
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-xl font-bold text-gray-800">$350</span>
            <span className="text-sm line-through text-gray-500">$400</span>
          </div>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg focus:outline-none mt-4 hover:bg-yellow-400 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentWithCard;
