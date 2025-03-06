'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Navbar } from '@/components/Navbar';
import SquareLogo from '../public/logoImages/squareLogo.png';
import CircleLogo from '../public/logoImages/circleLogo.png';
import Icon from '../public/icons/hamburger.svg';

export const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="relative top-0 left-1/2 transform -translate-x-1/2 w-full max-w-screen-lg z-50">
            <div className="flex items-center justify-center">
                <Link href="/" className="flex items-center" prefetch={false}>
                    <Image
                        width={12}
                        height={12}
                        src={SquareLogo}
                        quality={100}
                        priority
                        alt="Course logotype"
                        className="block xl:hidden"
                    />
                    <Image
                        width={12}
                        height={12}
                        src={CircleLogo}
                        quality={100}
                        priority
                        alt="Course logotype"
                        className="block xl:hidden"
                    />
                    <span className="block xl:hidden">Logo</span>
                </Link>

                <div className="hidden xl:block">
                    <Navbar />
                </div>

                <button onClick={toggleMenu} className="focus:outline-none lg:hidden">
                    <Image width={24} height={24} src={Icon} alt="Mobile navigation menu" />
                </button>
            </div>

            {isOpen && (
                <div className="container lg:hidden">
                    <Navbar isMobile={true} closeMenu={() => setIsOpen(false)} />
                </div>
            )}
        </header>
    );
};
