import React from 'react'
import Image from 'next/image';
const OurProduct = () => {
  return (
    <div className='bg-gray-200 flex overflow-x-auto '>
      <section className="py-16 md:py-24 px-4 font-poppins">
        <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12 md:mb-16'>
                <h2 className='text-[#3A3A3A] text-3xl md:text-4xl font-bold mb-4'>
                    Our Products
                </h2>
            </div>
            <div className='relative'>
                <div className='flex overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-4 px-[16px] sm:px-0'>
                    <div className='group flex-shrink-0 w-[280px] sm:w-auto'>
                        <div className='relative bg-[#F4F5F7] rounded-sm overflow-hidden justify-center'>
                            <Image 
                            alt="Syltherine" 
                            loading="lazy" 
                            width="285" 
                            height="301" 
                            decoding="async" 
                            data-nimg="1" 
                            className="w-full h-[301px] object-cover" 
                            src="/syltherine.png" 
  
                          />
                          <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                          <button className='w-52 bg-white text-[#B88E2F] px-10 py-3 rounded-sm hover:bg-[#B88E2F] hover:text-white transition-colors duration-300'>Add to Cart</button>
                          </div>
                          <div className='absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white'>
                        <button className='flex items-center gap-2 hover:text-[#B88E2F] transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share2 w-5 h-5">
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                            <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                            </svg>
                            Share
                        </button>
                        <button className='flex items-center gap-2 hover:text-[#B88E2F] transition-colors'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chart-no-axes-column w-5 h-5">
                         <line x1="18" x2="18" y1="20" y2="10"></line>
                         <line x1="12" x2="12" y1="20" y2="4"></line>
                         <line x1="6" x2="6" y1="20" y2="14"></line>
                         </svg>
                         Compare
                        </button>

                        <button className='flex items-center gap-2 hover:text-[#B88E2F] transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart w-5 h-5">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                            </svg>
                            Like
                        </button>
                          </div>
                          </div>

                          <div className='absolute top-5 right-5 bg-[#E97171] text-white text-sm font-bold px-4 py-1 rounded-full-sm'>30%</div>
                        </div>
                        <div className='mt-4 text-center'>
                            <h2 className='text-[#3A3A3A] text-2xl font-semibold mb-1'>
                                Syltherine
                            </h2>
                            <p className='text-[#898989] mb-2'>Stylish Cafe Chair </p>
                            <div className='flex justify-center items-center gap-3'>
                                <span className='text-[#B88E2F] font-semibold'>
                                    Rp 2,500,000
                                </span>
                                <span className='text-[#B0B0B0] line-thought'>
                                    Rp 3,500,000
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div className='flex overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-4 px-[16px] sm:px-0'>
                    <div className='group flex-shrink-0 w-[280px] sm:w-auto'>
                        <div className='relative bg-[#F4F5F7] rounded-sm overflow-hidden'>
                            <Image 
                            alt="Leviosa" 
                            loading="lazy" 
                            width="285" 
                            height="301" 
                            decoding="async" 
                            data-nimg="1" 
                            className="w-full h-[301px] object-cover" 
                            src="/leviosa.png" 
  
                          />
                          <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                          <button className='w-52 bg-white text-[#B88E2F] px-10 py-3 rounded-sm hover:bg-[#B88E2F] hover:text-white transition-colors duration-300'>Add to Cart</button>
                          </div>
                          <div className='absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white'>
                        <button className='flex items-center gap-2 hover:text-[#B88E2F] transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share2 w-5 h-5">
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                            <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                            </svg>
                            Share
                        </button>
                        <button className='flex items-center gap-2 hover:text-[#B88E2F] transition-colors'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chart-no-axes-column w-5 h-5">
                         <line x1="18" x2="18" y1="20" y2="10"></line>
                         <line x1="12" x2="12" y1="20" y2="4"></line>
                         <line x1="6" x2="6" y1="20" y2="14"></line>
                         </svg>
                         Compare
                        </button>

                        <button className='flex items-center gap-2 hover:text-[#B88E2F] transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart w-5 h-5">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                            </svg>
                            Like
                        </button>
                          </div>
                          </div>

                          <div className='absolute top-5 right-5 bg-[#E97171] text-white text-sm font-bold px-4 py-1 rounded-full-sm'>30%</div>
                        </div>
                        <div className='mt-4 text-center'>
                            <h2 className='text-[#3A3A3A] text-2xl font-semibold mb-1'>
                                Syltherine
                            </h2>
                            <p className='text-[#898989] mb-2'>Stylish Cafe Chair </p>
                            <div className='flex justify-center items-center gap-3'>
                                <span className='text-[#B88E2F] font-semibold'>
                                    Rp 2,500,000
                                </span>
                                <span className='text-[#B0B0B0] line-thought'>
                                    Rp 3,500,000
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div className='flex overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-4 px-[16px] sm:px-0'>
                    <div className='group flex-shrink-0 w-[280px] sm:w-auto'>
                        <div className='relative bg-[#F4F5F7] rounded-sm overflow-hidden'>
                            <Image 
                            alt="Syltherine" 
                            loading="lazy" 
                            width="285" 
                            height="301" 
                            decoding="async" 
                            data-nimg="1" 
                            className="w-full h-[301px] object-cover" 
                            src="/lolito.png" 
  
                          />
                          <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                          <button className='w-52 bg-white text-[#B88E2F] px-10 py-3 rounded-sm hover:bg-[#B88E2F] hover:text-white transition-colors duration-300'>Add to Cart</button>
                          </div>
                          <div className='absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white'>
                        <button className='flex items-center gap-2 hover:text-[#B88E2F] transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share2 w-5 h-5">
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                            <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                            </svg>
                            Share
                        </button>
                        <button className='flex items-center gap-2 hover:text-[#B88E2F] transition-colors'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chart-no-axes-column w-5 h-5">
                         <line x1="18" x2="18" y1="20" y2="10"></line>
                         <line x1="12" x2="12" y1="20" y2="4"></line>
                         <line x1="6" x2="6" y1="20" y2="14"></line>
                         </svg>
                         Compare
                        </button>

                        <button className='flex items-center gap-2 hover:text-[#B88E2F] transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart w-5 h-5">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                            </svg>
                            Like
                        </button>
                          </div>
                          </div>

                          <div className='absolute top-5 right-5 bg-[#E97171] text-white text-sm font-bold px-4 py-1 rounded-full-sm'>30%</div>
                        </div>
                        <div className='mt-4 text-center'>
                            <h2 className='text-[#3A3A3A] text-2xl font-semibold mb-1'>
                                Syltherine
                            </h2>
                            <p className='text-[#898989] mb-2'>Stylish Cafe Chair </p>
                            <div className='flex justify-center items-center gap-3'>
                                <span className='text-[#B88E2F] font-semibold'>
                                    Rp 2,500,000
                                </span>
                                <span className='text-[#B0B0B0] line-thought'>
                                    Rp 3,500,000
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div className='flex overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-4 px-[16px] sm:px-0'>
                    <div className='group flex-shrink-0 w-[280px] sm:w-auto'>
                        <div className='relative bg-[#F4F5F7] rounded-sm overflow-hidden'>
                            <Image 
                            alt="Syltherine" 
                            loading="lazy" 
                            width="285" 
                            height="301" 
                            decoding="async" 
                            data-nimg="1" 
                            className="w-full h-[301px] object-cover" 
                            src="/muggo.png" 
  
                          />
                          <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                          <button className='w-52 bg-white text-[#B88E2F] px-10 py-3 rounded-sm hover:bg-[#B88E2F] hover:text-white transition-colors duration-300'>Add to Cart</button>
                          </div>
                          <div className='absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white'>
                        <button className='flex items-center gap-2 hover:text-[#B88E2F] transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share2 w-5 h-5">
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                            <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                            </svg>
                            Share
                        </button>
                        <button className='flex items-center gap-2 hover:text-[#B88E2F] transition-colors'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chart-no-axes-column w-5 h-5">
                         <line x1="18" x2="18" y1="20" y2="10"></line>
                         <line x1="12" x2="12" y1="20" y2="4"></line>
                         <line x1="6" x2="6" y1="20" y2="14"></line>
                         </svg>
                         Compare
                        </button>

                        <button className='flex items-center gap-2 hover:text-[#B88E2F] transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart w-5 h-5">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                            </svg>
                            Like
                        </button>
                          </div>
                          </div>

                          <div className='absolute top-5 right-5 bg-[#E97171] text-white text-sm font-bold px-4 py-1 rounded-full-sm'>30%</div>
                        </div>
                        <div className='mt-4 text-center'>
                            <h2 className='text-[#3A3A3A] text-2xl font-semibold mb-1'>
                                Syltherine
                            </h2>
                            <p className='text-[#898989] mb-2'>Stylish Cafe Chair </p>
                            <div className='flex justify-center items-center gap-3'>
                                <span className='text-[#B88E2F] font-semibold'>
                                    Rp 2,500,000
                                </span>
                                <span className='text-[#B0B0B0] line-thought'>
                                    Rp 3,500,000
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
            <div className='relative'>
                <div className='flex overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-4 px-[16px] sm:px-0'>
                    <div className='group flex-shrink-0 w-[280px] sm:w-auto'>
                        <div className='relative bg-[#F4F5F7] rounded-sm overflow-hidden'>
                            <Image 
                            alt="Syltherine" 
                            loading="lazy" 
                            width="285" 
                            height="301" 
                            decoding="async" 
                            data-nimg="1" 
                            className="w-full h-[301px] object-cover" 
                            src="/pingky.png" 
  
                          />
                          <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                          <button className='w-52 bg-white text-[#B88E2F] px-10 py-3 rounded-sm hover:bg-[#B88E2F] hover:text-white transition-colors duration-300'>Add to Cart</button>
                          </div>
                          <div className='absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white'>
                        <button className='flex items-center gap-2 hover:text-[#B88E2F] transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share2 w-5 h-5">
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                            <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                            </svg>
                            Share
                        </button>
                        <button className='flex items-center gap-2 hover:text-[#B88E2F] transition-colors'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chart-no-axes-column w-5 h-5">
                         <line x1="18" x2="18" y1="20" y2="10"></line>
                         <line x1="12" x2="12" y1="20" y2="4"></line>
                         <line x1="6" x2="6" y1="20" y2="14"></line>
                         </svg>
                         Compare
                        </button>

                        <button className='flex items-center gap-2 hover:text-[#B88E2F] transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart w-5 h-5">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                            </svg>
                            Like
                        </button>
                          </div>
                          </div>

                          <div className='absolute top-5 right-5 bg-[#E97171] text-white text-sm font-bold px-4 py-1 rounded-full-sm'>30%</div>
                        </div>
                        <div className='mt-4 text-center'>
                            <h2 className='text-[#3A3A3A] text-2xl font-semibold mb-1'>
                                Syltherine
                            </h2>
                            <p className='text-[#898989] mb-2'>Stylish Cafe Chair </p>
                            <div className='flex justify-center items-center gap-3'>
                                <span className='text-[#B88E2F] font-semibold'>
                                    Rp 2,500,000
                                </span>
                                <span className='text-[#B0B0B0] line-thought'>
                                    Rp 3,500,000
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='relative'>
                <div className='flex overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-4 px-[16px] sm:px-0'>
                    <div className='group flex-shrink-0 w-[280px] sm:w-auto'>
                        <div className='relative bg-[#F4F5F7] rounded-sm overflow-hidden'>
                            <Image 
                            alt="Syltherine" 
                            loading="lazy" 
                            width="285" 
                            height="301" 
                            decoding="async" 
                            data-nimg="1" 
                            className="w-full h-[301px] object-cover" 
                            src="/respirs.png" 
  
                          />
                          <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                          <button className='w-52 bg-white text-[#B88E2F] px-10 py-3 rounded-sm hover:bg-[#B88E2F] hover:text-white transition-colors duration-300'>Add to Cart</button>
                          </div>
                          <div className='absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white'>
                        <button className='flex items-center gap-2 hover:text-[#B88E2F] transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share2 w-5 h-5">
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                            <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                            </svg>
                            Share
                        </button>
                        <button className='flex items-center gap-2 hover:text-[#B88E2F] transition-colors'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chart-no-axes-column w-5 h-5">
                         <line x1="18" x2="18" y1="20" y2="10"></line>
                         <line x1="12" x2="12" y1="20" y2="4"></line>
                         <line x1="6" x2="6" y1="20" y2="14"></line>
                         </svg>
                         Compare
                        </button>

                        <button className='flex items-center gap-2 hover:text-[#B88E2F] transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart w-5 h-5">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                            </svg>
                            Like
                        </button>
                          </div>
                          </div>

                          <div className='absolute top-5 right-5 bg-[#E97171] text-white text-sm font-bold px-4 py-1 rounded-full-sm'>30%</div>
                        </div>
                        <div className='mt-4 text-center'>
                            <h2 className='text-[#3A3A3A] text-2xl font-semibold mb-1'>
                                Syltherine
                            </h2>
                            <p className='text-[#898989] mb-2'>Stylish Cafe Chair </p>
                            <div className='flex justify-center items-center gap-3'>
                                <span className='text-[#B88E2F] font-semibold'>
                                    Rp 2,500,000
                                </span>
                                <span className='text-[#B0B0B0] line-thought'>
                                    Rp 3,500,000
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='relative'>
                <div className='flex overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-4 px-[16px] sm:px-0'>
                    <div className='group flex-shrink-0 w-[280px] sm:w-auto'>
                        <div className='relative bg-[#F4F5F7] rounded-sm overflow-hidden'>
                            <Image 
                            alt="Syltherine" 
                            loading="lazy" 
                            width="285" 
                            height="301" 
                            decoding="async" 
                            data-nimg="1" 
                            className="w-full h-[301px] object-cover" 
                            src="/potty.png" 
  
                          />
                          <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                          <button className='w-52 bg-white text-[#B88E2F] px-10 py-3 rounded-sm hover:bg-[#B88E2F] hover:text-white transition-colors duration-300'>Add to Cart</button>
                          </div>
                          <div className='absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white'>
                        <button className='flex items-center gap-2 hover:text-[#B88E2F] transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share2 w-5 h-5">
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                            <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                            </svg>
                            Share
                        </button>
                        <button className='flex items-center gap-2 hover:text-[#B88E2F] transition-colors'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chart-no-axes-column w-5 h-5">
                         <line x1="18" x2="18" y1="20" y2="10"></line>
                         <line x1="12" x2="12" y1="20" y2="4"></line>
                         <line x1="6" x2="6" y1="20" y2="14"></line>
                         </svg>
                         Compare
                        </button>

                        <button className='flex items-center gap-2 hover:text-[#B88E2F] transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart w-5 h-5">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                            </svg>
                            Like
                        </button>
                          </div>
                          </div>

                          <div className='absolute top-5 right-5 bg-[#E97171] text-white text-sm font-bold px-4 py-1 rounded-full-sm'>30%</div>
                        </div>
                        <div className='mt-4 text-center'>
                            <h2 className='text-[#3A3A3A] text-2xl font-semibold mb-1'>
                                Syltherine
                            </h2>
                            <p className='text-[#898989] mb-2'>Stylish Cafe Chair </p>
                            <div className='flex justify-center items-center gap-3'>
                                <span className='text-[#B88E2F] font-semibold'>
                                    Rp 2,500,000
                                </span>
                                <span className='text-[#B0B0B0] line-thought'>
                                    Rp 3,500,000
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </div>
      </section>
    </div>
  )
}

export default OurProduct
