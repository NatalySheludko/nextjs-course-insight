'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Navbar } from '@/components/Navbar';
import SquareLogo from '../public/logoImages/squareLogo.png';
import CircleLogo from '../public/logoImages/circleLogo.png';
import Icon from '../public/icons/menu.svg';
import CloseIcon from '../public/icons/cross.svg';

export const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className="container absolute top-[20px] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-between xl:justify-center z-10">
                <Link href="/" prefetch={false} className="relative top-[12px] flex pl-[20px]">
                    <Image
                        width={12}
                        height={12}
                        src={SquareLogo}
                        quality={100}
                        priority
                        alt="Course logotype"
                        className="bottom-[48%] left-[0%] absolute xl:hidden"
                    />
                    <Image
                        width={12}
                        height={12}
                        src={CircleLogo}
                        quality={100}
                        priority
                        alt="Course logotype"
                        className="bottom-[10%] left-[10%] absolute xl:hidden"
                    />
                    <span className="block xl:hidden font-medium text-xs text-(--white)">Logo</span>
                </Link>

                <div className="hidden xl:block">
                    <Navbar />
                </div>

                <button
                    onClick={toggleMenu}
                    className={`lg:hidden pt-[21px] ${isOpen ? 'hidden' : 'block'}`}
                >
                    <Image width={20} height={14} src={Icon} alt="Mobile navigation menu" />
                </button>
            </div>

            {isOpen && (
                <div className="">
                    <div
                        className="fixed top-0 left-0 rounded-b-[71px] h-[700px] w-full bg-(--backdrop) md:hidden z-20"
                        onClick={() => setIsOpen(false)}
                    />

                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 p-1 md:hidden z-20"
                    >
                        <Image width={15} height={14} src={CloseIcon} alt="Close menu" />
                    </button>

                    <div
                        className={`fixed top-0 h-[700px] w-[189px] rounded-r-[24px] bg-(--backgroundLight) transition-all duration-300 md:hidden z-20 ${
                            isOpen ? 'translateX(0%)' : 'translateX(100%)'
                        }`}
                    >
                        <Link
                            href="/"
                            prefetch={false}
                            className="relative top-[12px] left-4 flex pl-[20px]"
                        >
                            <Image
                                width={13}
                                height={13}
                                src={SquareLogo}
                                quality={100}
                                priority
                                alt="Course logotype"
                                className="bottom-[40%] left-[0%] absolute xl:hidden"
                            />
                            <Image
                                width={13}
                                height={13}
                                src={CircleLogo}
                                quality={100}
                                priority
                                alt="Course logotype"
                                className="bottom-[17%] left-[3%] absolute xl:hidden"
                            />
                            <span
                                className={`block xl:hidden font-medium text-[20px] ${
                                    isOpen ? 'text-(--frame)' : 'text-(--white)'
                                }`}
                            >
                                Logo
                            </span>
                        </Link>

                        <Navbar isMobile={true} closeMenu={() => setIsOpen(false)} />
                    </div>
                </div>
            )}
        </header>
    );
};
