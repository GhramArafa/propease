import React from 'react'
import { TextInput, Button } from "@mantine/core";
import { FiSearch } from "react-icons/fi";
import BackgroudImage from '../../assets/heroo.svg'
import { motion } from "framer-motion";
const propertyFilters = ['All Properties', 'For Sale', 'For Rent'];
import { Divider } from "@mantine/core";

const Hero = () => {
    const words = ["Find", "Your", "Perfect", "Home"];
    return (
        <div
            className="relative flex flex-col items-center justify-center h-[88vh] px-4"
            style={{ backgroundImage: `url(${BackgroudImage})` }}
        >
            {/* Headline */}
            <motion.h1 
                className="text-3xl md:text-6xl font-semibold text-main text-center flex gap-6 mt-40 mb-3" 
            >
                {words.map((word, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3, duration: 0.4 }}
                        className="inline-block"
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.h1>

            {/* Search Bar */}
            <div className="relative w-full max-w-lg mt-20 ">
                <TextInput
                    placeholder="Enter Keywords..."
                    classNames={{ input: "rounded-full pl-4 pr-12 h-12 shadow-md w-full outline-none border border-gray-200 "}}
                />
                <Button
                    className=" text-white absolute z-50 right-1 top-1/2 transform -translate-y-1/2 bg-yellow-500 rounded-full p-3"
                >
                    <FiSearch size={18}/>
                </Button>
            </div>

            {/* Property Filters */}
            <div className="flex gap-3  flex-col mt-20 ">
                <h2 className="text-lg md:text-xl font-semibold text-main text-center ">Explore all things property</h2>
                <div className="flex gap-4">
                    {propertyFilters?.map((filter) => (
                        <Button
                            key={filter}
                            variant="outline"
                            className="rounded-full border-transparent bg-[#0c332e] text-white min-w-fit px-3 
                                       hover:bg-white hover:text-[#0c332e] transition duration-1000  shadow-md hover:shadow-lg"
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
