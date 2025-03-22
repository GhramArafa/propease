import { Card, Text } from "@mantine/core";
import { motion, useInView } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { useRef } from "react";
import imageOne from "../../assets/homecard1.png";
import imageTwo from "../../assets/homecard2.png";

const data = [
    {
        title: "Looking for a new home?",
        description: "10 new offers every day. 350 offers on site, trusted by a community of thousands of users.",
        buttonText: "Get Started",
        image: imageOne,
        direction: "left",
    },
    {
        title: "Want to sell your home?",
        description: "10 new offers every day. 350 offers on site, trusted by a community of thousands of users.",
        buttonText: "Get Started",
        image: imageTwo,
        direction: "right",
    },
];

const HomeCards = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    return (
        <div className="flex flex-col md:flex-row justify-center gap-20 items-center py-10 mt-8 min-h-[80vh]">
            {data?.map((item, index) => {

                return (
                    <motion.div
                        key={index}
                        ref={ref}
                        initial={{ opacity: 0, x: item.direction === "left" ? -100 : 100 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: index * 0.2, ease: "easeInOut" }}
                        whileHover={{ scale: 1.05 }}
                        className="w-full md:w-[600px]"
                    >
                        <Card
                            className={`rounded-2xl shadow-sm ${
                                index !== 1 ? "bg-[#F9F9F9]" : "bg-[#FFF8F6]"
                            } flex justify-between items-center p-6 cursor-pointer`}
                        >
                            <div className="flex flex-col gap-4 max-w-1/2">
                                <Text className="text-lg font-bold leading-snug">{item?.title}</Text>
                                <Text className="text-base text-gray-800 leading-relaxed">{item?.description}</Text>
                                <motion.button 
                                    className="bg-main hover:bg-hover text-white rounded-2xl py-3 px-6 flex justify-center items-center 
                                        gap-1.5 w-fit transition-all duration-700 ease-in-out shadow-lg hover:shadow-2xl"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {item?.buttonText}
                                    <GoArrowRight size={20} className="mt-1" />
                                </motion.button>
                            </div>
                            <img src={item?.image} alt="House" className="w-32 h-32 object-contain" />
                        </Card>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default HomeCards;
