import { Link, useLocation } from 'react-router-dom';
import { Button, Group, Text } from '@mantine/core';
import logo from '../assets/logo.svg'
import { motion } from "framer-motion";

export default function Header() {
const location = useLocation();

const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Properties', path: '/properties' },
    { name: 'Services', path: '/services' },
    { name: 'Contact us', path: '/contact' },
];

return (
    <header className="w-full flex justify-between items-center py-0 px-8">
        {/* Left Logo */}
        <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <Link to="/" className="flex items-center gap-0">
                <img src={logo} alt="PropEase Logo" />
                <Text className='text-main font-bold text-base'>PropEase</Text>
            </Link>
        </motion.div>

        {/* Center Navigation */}
        <Group className='space-x-3'>
            {navItems?.map((item) => (
            <Link
                key={item?.path}
                to={item?.path}
                className={`px-3 py-1 rounded-md font-medium text-main ${
                location?.pathname === item?.path
                    ? 'bg-main text-white font-bold'
                    : 'hover:bg-hover hover:text-white'
                }`}
            >
                {item?.name}
            </Link>
            ))}
        </Group> 

        {/* Right Auth Buttons */}
        <Group className='space-x-4'>
            <Link to="/login">
            <Button className='bg-main rounded-full py-2 font-semibold text-white  min-w-[120px] border-2 border-[#0c332e] hover:bg-white hover:text-[#0c332e] 
                    transition duration-1000"'>
                Login
            </Button>
            </Link>
            <Link to="/signup">
            <Button className='border border-main rounded-full py-2 font-semibold text-main min-w-[120px]
                    hover:bg-[#0c332e] hover:text-white hover:border-white 
                    transition duration-1000'>
                Sign up
            </Button>
            </Link>
        </Group>
    </header>
);
};
