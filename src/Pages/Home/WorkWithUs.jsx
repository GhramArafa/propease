import { Button } from "@mantine/core";
import { HiCheck } from "react-icons/hi";
import { GoArrowRight } from "react-icons/go";
import workOne from '../../assets/work1.png';
import workTwo from '../../assets/work2.png';
import { Card, Image, Text } from "@mantine/core";
const WorkWithUs = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-bg p-8 h-[120vh]">
            {/* Left Side - Images */} 
            <div className="flex h-full justify-center gap-4 py-14">
                

        <img
        src={workOne}
         alt="Family"
        className="w-40 h-40 md:w-[309px] md:h-[350px] rounded-xl object-cover items-start mb-auto
         transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-30"
        
        />
      
      <img
  src={workTwo}
  alt="House"
  className="w-52 h-40 md:w-[400px] md:h-[474px] rounded-xl object-cover items-end mt-auto 
  transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-30"
/>

            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col gap-6 max-w-lg">
                <h2 className="text-4xl font-bold md:max-w-md">Why You Should Work With Us</h2>

                {/* Feature List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-3">
                    {[
                        "100% Secure",
                        "Wide Range of Properties",
                        "Buy or Rent Homes",
                        "Trusted by Thousands",
                    ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <span className="text-green-600 p-2 bg-white rounded-full">
                                <HiCheck size={20}/>
                            </span>
                            <span className="text-black font-bold text-sm">{item}</span>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <button
  className="bg-main text-white hover:bg-white hover:text-[#0c332e] rounded-2xl font-semibold py-3 px-6 flex justify-center items-center gap-1.5 w-fit  tracking-widest  transition-all duration-700 ease-in-out shadow-lg hover:shadow-2xl"
>
  Learn More
  <GoArrowRight size={20} className="mt-1" />
</button>


            </div>
        </div>
    );
};
export default WorkWithUs;