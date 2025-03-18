import React from 'react'
import { TextInput, Button, Title, Text } from "@mantine/core";
import { FaPaperPlane } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const Footer = () => {
    return (
        <section className="bg-main py-16 px-4 text-white">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                {/* Icon */}
                <div className="flex justify-center">
                <div className="bg-yellowCustom rounded-full p-3">
                    <FaPaperPlane className="text-black w-6 h-6" />
                </div>
                </div>

                {/* Title */}
                <Title className="text-4xl font-bold">
                    Stay Up to Date
                </Title>

                {/* Subtitle */}
                <Text size="sm" className="text-gray-300">
                    Subscribe to our newsletter to receive our weekly feed.
                </Text>

                {/* Input + Button */}
                <form className="flex items-center w-[65%] mx-auto bg-[#274d47] rounded-full overflow-hidden">
                    <TextInput
                        placeholder="Your e-mail"
                        classNames={{
                            input: "bg-transparent text-white border-none outline-none w-full p-4 focus:ring-0 focus-visible:ring-0",
                        }}
                        className="w-full"
                    />
                    <button
                        type="submit"
                        className="w-1/4 flex items-center justify-center gap-2 text-white px-6"
                    >
                        <span>Send</span>
                        <span>
                            <GoArrowRight size={20} className='mt-1'/>
                        </span>
                    </button>

                </form>
            </div>
        </section>
    );
};

export default Footer
