'use client'
import Link from 'next/link';
import React from 'react';
import GostButton from './Button/GostButton';
import { Menu, Search } from 'lucide-react';
import PrimaryButton from './Button/PrimaryButton';

const Navbar = () => {
    const navlink = [
        {id:1, lable: 'Home', path: '/'},
        // {id:1, lable: 'About Us', path: '/about'},
        {id:1, lable: 'Services', path: '/services'},
        // {id:1, lable: 'Pages', path: '/pages'},
        // {id:1, lable: 'Blog', path: '/blog'},
        // {id:1, lable: 'Contact', path: '/contact'},
    ]
    return (
        <header className='flex items-center justify-between w-full h-20 border-b border-gray-200 px-3 py-4'>
           <h2 className='text-5xl'>
            <span className='font-bold'>info</span>
            <span className='font-medium'>tek</span>
           </h2>
             <nav className='flex items-center gap-5'>
               <ul className='flex items-center gap-10'>
                 {navlink.map((link,inx) => (
                   <li key={inx} className='text-lg font-semibold hover:text-[#384BFF]'>
                     <Link href={link.path}>{link.lable}</Link>
                   </li>
                 ))}
               </ul>

               <div className='flex items-center gap-5'>
                <GostButton>
                    <Search size={15}/>
                </GostButton>

                <PrimaryButton >
                    Get a Quote
                </PrimaryButton>

                <GostButton>
                    <Menu  size={15}/>
                </GostButton>
               </div>
             </nav>
        </header>
    );
};

export default Navbar;
