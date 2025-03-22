import React from 'react'
import { Card, Text, Title } from "@mantine/core";
import stepOne from '../../assets/step1.png';
import stepTwo from '../../assets/step2.png';
import stepThree from '../../assets/step3.png';

const Steps = () => {
    const steps = [
        {
            id: 1,
            title: "Search for your favorite house in your location",
            image: stepOne , 
        },
        {
            id: 2,
            title: "Make a visit appointment with one of our agents",
            image: stepTwo,
        },
        {
            id: 3,
            title: "Get your dream house in a month, or less",
            image: stepThree,
        },
    ];

    return (
        <section className="py-20 px-32 mx-auto bg-white h-[70vh] w-full flex flex-col justify-center item-center gap-24">
        {/* Title */}
        <Title className="text-center text-2xl md:text-4xl font-semibold text-gray-800">
            Find Your Dream House as Easy as 1, 2, 3
        </Title>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {steps?.map((step) => (
            <Card key={step?.id} shadow="md" padding="lg" radius="md" className="flex flex-col items-center text-center border-0">
                <img src={step?.image} alt={`Step ${step?.id}`} className="w-32 h-32 object-contain mb-4 transition-all duration-800 border border-transparent 
             hover:scale-110 hover:shadow-xlg  hover:bg-[#F9F9F9] p-2 rounded-lg " />
                <Text className="font-semibold text-main text-lg px-12">
                    {step?.id}. {step?.title}
                </Text>
            </Card>
            ))}
        </div>
        </section>
    );
};

export default Steps;
