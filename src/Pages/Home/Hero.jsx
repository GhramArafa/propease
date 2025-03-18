import React from 'react'
import { TextInput, Button } from "@mantine/core";
import { FiSearch } from "react-icons/fi";
import BackgroudImage from '../../assets/herosvg.svg'

const propertyFilters = ['All Properties', 'For Sale', 'For Rent'];


const Hero = () => {
    return (
        <div
            className="relative flex flex-col items-center justify-center h-[87vh] px-4"
            style={{ backgroundImage: `url(${BackgroudImage})` }}
        >
            {/* Headline */}
            <h1 className="text-3xl md:text-5xl font-semibold text-main text-center mt-2">
                Find Your Perfect Home
            </h1>

            {/* Search Bar */}
            <div className="relative mt-6 w-full max-w-lg">
                <TextInput
                    placeholder="Enter Keywords..."
                    classNames={{ input: "rounded-full pl-4 pr-12 h-12 shadow-md w-full outline-none border border-gray-200" }}
                />
                <Button
                    className=" text-white absolute z-50 right-1 top-1/2 transform -translate-y-1/2 bg-yellow-500 rounded-full p-3"
                >
                    <FiSearch size={18}/>
                </Button>
            </div>

            {/* Property Filters */}
            <div className="flex gap-3 mt-24 flex-col">
                <h2 className="text-lg md:text-xl font-semibold text-main text-center ">Explore all things property</h2>
                <div className="flex gap-4">
                    {propertyFilters?.map((filter) => (
                        <Button
                            key={filter}
                            variant="outline"
                            className="rounded-full border border-gray-300 text-main min-w-fit px-3"
                        >
                            {filter}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
