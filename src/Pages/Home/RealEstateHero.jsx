import React from 'react';
import { Button } from '@mantine/core';
import image from '../../assets/realestate.png';

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
                    className="bg-yellowCustom  text-white rounded-2xl font-semibold w-fit px-20 py-3 uppercase tracking-widest"
                >
                    Contact Us
                </Button>
            </div>

            {/* Right Image */}
            <div className="w-full h-full md:w-[40%]">
                <img
                    src={image}
                    alt="Real Estate"
                    className="rounded-2xl object-cover w-full h-full"
                />
            </div>
        </div>
    );
};

export default RealEstateHero
