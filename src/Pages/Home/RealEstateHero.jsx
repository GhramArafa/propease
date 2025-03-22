import React from 'react';
import { Button } from '@mantine/core';
import image from '../../assets/realestate.png';
import { motion } from "framer-motion";
import { Image } from "@mantine/core";

const RealEstateHero = () => {
    return (
        <div className="bg-main rounded-2xl p-8 md:py-8 md:px-18 h-[50vh] flex flex-col md:flex-row items-start justify-between gap-8 mb-20">
            {/* Left Content */}
            <div className="text-white flex flex-col gap-12 max-w-lg">
                <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                    Find your best <br /> Real Estate
                </h1>
                <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                    We provide a complete service for the sale, <br />
                    purchase or rental of real estate.
                </p>

                <Button
  radius="md"
  size="md"
  className="bg-yellowCustom text-white rounded-2xl font-semibold w-fit px-20 py-3 uppercase tracking-widest 
             transition-all duration-1000 ease-in-out 
             hover:bg-white hover:text-yellowCustom border border-transparent hover:border-yellowCustom
             shadow-md hover:shadow-xl"
>
  Contact Us
</Button>


            </div>

            {/* Right Image */}
            <div className="w-full h-full md:w-[40%] overflow-hidden">
  
    <Image 
      src={image}
      alt="Real Estate"
      className="rounded-2xl object-cover w-full h-full shadow-lg transition-transform duration-500 ease-in-out hover:scale-125  "
      radius="xl"
      withPlaceholder
    />
 
</div>
        </div>
    );
};

export default RealEstateHero
