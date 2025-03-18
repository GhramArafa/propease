import { Link, useLocation } from 'react-router-dom';
import { Button, Group, Text } from '@mantine/core';
import logo from '../assets/logo.svg'

export default function Header() {
const location = useLocation();

const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Properties', path: '/properties' },
    { name: 'Services', path: '/services' },
    { name: 'Contact us', path: '/contact' },
];

return (
    <header className="w-full flex justify-between items-center py-2 px-8">
        {/* Left Logo */}
        <Link to="/" className="flex items-center gap-0">
            <img src={logo} alt="PropEase Logo" />
            <Text className='text-main font-bold text-base'>PropEase</Text>
        </Link>

        {/* Center Navigation */}
        <Group className='space-x-3'>
            {navItems?.map((item) => (
            <Link
                key={item?.path}
                to={item?.path}
                className={`px-3 py-1 rounded-md text-black font-medium ${
                location?.pathname === item?.path
                    ? 'bg-gray-200 font-bold'
                    : 'hover:bg-gray-100'
                }`}
            >
                {item?.name}
            </Link>
            ))}
        </Group> 

        {/* Right Auth Buttons */}
        <Group className='space-x-4'>
            <Link to="/login">
            <Button className='bg-main rounded-full py-2 font-semibold text-white  min-w-[120px]'>
                Login
            </Button>
            </Link>
            <Link to="/signup">
            <Button className='border border-main rounded-full py-2 font-semibold text-main min-w-[120px]'>
                Sign up
            </Button>
            </Link>
        </Group>
    </header>
);
};
