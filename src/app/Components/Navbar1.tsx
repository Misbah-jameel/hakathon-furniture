"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-white shadow-md font-poppins relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-20'>
          <div className='flex items-center'>
            <Image
              src="/logo.png"
              alt="logo"
              width={185}
              height={41}
            />
          </div>
          <div className='hidden md:flex md:items-center sm:space-x-8 text-gray-800 hover-gray-600 px-3 py-2 text-base font-poppinsSemiBold'>
            <Link className='text-gray-800 hover-gray-600 px-3 py-2 text-base font-poppinsSemiBold' href="/">Home</Link>
            <Link href="/Cards" className='text-gray-800 hover-golden-500 px-3 py-2 text-base font-poppinsSemiBold'>Shop</Link>
            <Link className='text-gray-800 hover-golden-600 px-3 py-2 text-base font-poppinsSemiBold' href="/FourthCards">Blog</Link>
            <Link className='text-gray-800 hover-golden-600 px-3 py-2 text-base font-poppinsSemiBold' href="/OnlyImages">Contact</Link>
          </div>
          <div className='hidden md:flex md:items-center sm:space-x-9'>
            <Link className='text-gray-800 hover:text-gray-600' href="/shop">
              <Image
                alt="user"
                src="/account-icon.png"
                width={22}
                height={22}
              />
            </Link>
            <Link className='text-gray-800 hover:text-gray-600' href="/shop">
              <Image
                alt="search-icon"
                src="/search-icon.png"
                width={22}
                height={22}
              />
            </Link>
            <Link className='text-gray-800 hover:text-gray-600' href="/shop">
              <Image
                alt="heart-icon"
                src="/heart-icon.png"
                width={22}
                height={22}
              />
            </Link>
            <button className='text-gray-800 hover:text-gray-600 relative'>
              <Image
                src="/cart-icon.png"
                alt="cart"
                width={22}
                height={22}
              />
              <span className='absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center'>2</span>
            </button>
          </div>
          <div className='flex items-center md:hidden'>
            <button className='inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none focus-ring-2 focus-ring-inset focus:ring-gray-500'>
              <span className='sr-only'>Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className='absolute pt-12 md:hidden top-0 bg-white z-40 h-[100vh] w-[80%]'>
        <div className='px-2 pt-2 pb-3 space-y-1 bg-white'>
          <Link className='block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600' href="/">Home</Link>
          <Link className='block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600' href="/Shop/shopSection">Shop</Link>
          <Link className='block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600' href="/">Blog</Link>
          <Link className='block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600' href="/">Contact</Link>
          <div className='pl-2 pt-3 flex gap-4'>
            <Link className='text-gray-800 hover:text-gray-600' href="#">
              <Image
                src="/heart-icon.png"
                alt="heart"
                width={22}
                height={22}
              />
            </Link>
            <button className='text-gray-800 hover:text-gray-600 relative'>
              <Image
                src="/cart-icon.png"
                alt="cart"
                width={22}
                height={22}
              />
              <span className='absolute -top-2 -right-2 bg-red-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center'>2</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
