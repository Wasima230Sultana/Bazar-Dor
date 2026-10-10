'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import UserInfo from './UserInfo';

const Navbar = () => {
    const [date, setDate] = useState("");

    useEffect(() => {
        const today = new Date().toLocaleDateString("bn-BD", {
            dateStyle: "full",
        });

        setDate(today);
    }, []);

    return (
        <div className='w-full px-4 py-2'>
            <div className='max-w-7xl mx-auto'>
                <div>
                     <div className='flex flex-col items-center justify-between gap-1 sm:flex-row sm:gap-2'>
                    <div className='flex items-center gap-2'>
                        <Link href={'/'}>
                         <Image
                            className='w-10 h-10 bg-[#05893E] p-1 rounded-lg'
                            src='/logo-icon.png'
                            alt='বাজার দর লোগো'
                            width={50}
                            height={50}
                        />
                        </Link>
                       

                        <div>
                            <h2 className='text-2xl font-bold'>বাজার দর</h2>
                            <span>{date}</span>
                        </div>
                    </div>

                   <UserInfo></UserInfo>
                </div>
                </div>
           
            </div>

        </div>
    );
};

export default Navbar;