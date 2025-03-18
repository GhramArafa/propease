import { Card, Text } from '@mantine/core';
import { GoArrowRight } from 'react-icons/go';
import imageOne from '../../assets/homecard1.png';
import imageTwo from '../../assets/homecard2.png';
const data = [
    {
        title: 'Looking for the new home?',
        description: '10 new offers every day. 350 offers on site, trusted by a community of thousands of users.',
        buttonText: 'Get Started',
        image: imageOne, 
    },
    {
        title: 'Want to sell your home?',
        description: '10 new offers every day. 350 offers on site, trusted by a community of thousands of users.',
        buttonText: 'Get Started',
        image: imageTwo, 
    },
];

const HomeCards= () => {
    return (
        <div className="flex flex-col md:flex-row justify-center gap-20 items-center py-10 mt-8 h-[50vh]">
            {data?.map((item, index) => (
                <Card
                    key={index}
                    className={`rounded-2xl shadow-sm w-full md:w-[600px] ${index !== 1 ? "bg-[#F9F9F9]" : "bg-[#FFF8F6]"} flex justify-between items-center p-6`}
                >
                <div className="flex flex-col gap-4 max-w-1/2">
                    <Text className="text-lg font-bold leading-snug">
                        {item?.title}
                    </Text>
                    <Text className="text-base text-gray-800 leading-relaxed">
                        {item?.description}
                    </Text>
                    <button
                        className="bg-main hover:bg-[#0c332e] rounded-2xl py-3 px-6 flex justify-center items-center gap-1.5 text-white w-fit"
                    >
                        {item?.buttonText}
                        <GoArrowRight size={20} className='mt-1'/>
                    </button>
                </div>
                <img src={item?.image} alt="House" className="w-32 h-32 object-contain" />
                </Card>
            ))}
        </div>
    );
};

export default HomeCards;