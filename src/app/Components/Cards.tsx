"use client";
import React from "react";
import Image from 'next/image';

const Cards = () => {
  const cards = [
    {
      title: "Dining",
      description: "Create unforgettable dining experiences with our elegant furniture.",
      image: "/dining.png", // Replace with dining image URL
    },
    {
      title: "Living",
      description: "Enhance your living space with our modern and comfortable designs.",
      image: "/image100.png", // Replace with living image URL
    },
    {
      title: "Bedroom",
      description: "Transform your bedroom into a cozy sanctuary of relaxation.",
      image: "/image101.png", // Replace with bedroom image URL
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Explore Our Collections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              {/* Adjusted Image height and width */}
              <Image
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover" // Full height and width for image
                width={600} // Custom width
                height={400} // Custom height
              />
              
              {/* Overlay effect to show the title on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition duration-300">
                <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;