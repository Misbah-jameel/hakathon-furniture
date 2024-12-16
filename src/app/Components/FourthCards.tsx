"use client";
import React from "react";
import Image from "next/image";
import { ShareIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from "@heroicons/react/24/outline";
const Cards = () => {
  const cards = [
    {
      title: "Dining",
      description: "Create unforgettable dining experiences with our elegant furniture.",
      image: "/image1.png",
      price: "$300",
      offerPrice: "$250",
      label: "Offer",
      labelColor: "bg-red-500",
    },
    {
      title: "Living",
      description: "Enhance your living space with our modern and comfortable designs.",
      image: "/chair.png",
      price: "$400",
      offerPrice: "$350",
      label: "New",
      labelColor: "bg-green-500",
    },
    {
      title: "Bedroom",
      description: "Transform your bedroom into a cozy sanctuary of relaxation.",
      image: "/sofa.png",
      price: "$500",
      offerPrice: "$450",
      label: "Offer",
      labelColor: "bg-red-500",
    },
    {
      title: "Office",
      description: "Create a productive workspace with our stylish office furniture.",
      image: "/images.png",
      price: "$200",
      offerPrice: "$180",
      label: "New",
      labelColor: "bg-green-500",
    },
    {
      title: "Kitchen",
      description: "Design a beautiful kitchen with our sleek and functional furniture.",
      image: "/image9.png",
      price: "$600",
      offerPrice: "$550",
      label: "Offer",
      labelColor: "bg-red-500",
    },
    {
      title: "Bathroom",
      description: "Give your bathroom a fresh and modern look with our elegant fixtures.",
      image: "/image6.png",
      price: "$250",
      offerPrice: "$230",
      label: "New",
      labelColor: "bg-green-500",
    },
    {
      title: "Outdoor",
      description: "Enjoy outdoor living with our comfortable and durable furniture.",
      image: "/whitesofa.png",
      price: "$350",
      offerPrice: "$300",
      label: "Offer",
      labelColor: "bg-red-500",
    },
    {
      title: "Storage",
      description: "Organize your space with our stylish and functional storage solutions.",
      image: "/brownsofa.png",
      price: "$150",
      offerPrice: "$120",
      label: "New",
      labelColor: "bg-green-500",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              {/* Label */}
              {card.label && (
                <span
                  className={`absolute top-4 left-4 text-white text-sm font-semibold rounded-full px-4 py-1 ${card.labelColor}`}
                >
                  {card.label}
                </span>
              )}

              {/* Image */}
              <Image
                src={card.image}
                alt={card.title}
                className="w-full h-80 object-cover"
                width={600}
                height={400}
              />

              {/* Card Content */}
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-gray-800">{card.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{card.description}</p>

                {/* Price and Offer Price */}
                <div className="flex items-center mt-4">
                  <span className="text-xl font-bold text-gray-800">{card.price}</span>
                  <span className="text-sm line-through text-gray-500 ml-2">{card.offerPrice}</span>
                </div>
              </div>

              {/* Overlay effect */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition duration-300">
                <button className="w-52 bg-white text-[#B88E2F] px-10 py-3 rounded-sm hover:bg-[#B88E2F] hover:text-white transition-colors duration-300">
                  Add to Cart
                </button>

                {/* Icons with text */}
                <div className="flex items-center gap-2 hover:text-[#B88E2F] transition-colors">
                  <div className="flex items-center space-x-1">
                    <ShareIcon className="h-5 w-5" />
                    <p>Share</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
                    <p>Compare</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <HeartIcon className="h-5 w-5" />
                    <p>Like</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
