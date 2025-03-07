'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import SquareLogo from '../public/logoImages/squareLogo.png';
import CircleLogo from '../public/logoImages/circleLogo.png';
import Email from '../public/icons/Email.svg';
import Map from '../public/icons/Map.svg';
import { footerItems } from '@/lib/menuItems';

export const Footer = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sections = isMobile ? [...footerItems].reverse() : footerItems;

    return (
        <footer className="xl:pt-100px bg-(--frame) rounded-t-[72px] xl:rounded-t-[60px]">
            <div className="container">
                <div className="xl:flex xl:justify-between py-[37px] px-[37px] xl:px-[0] xl:py-[40px]">
                    <div>
                        <Link
                            href="/"
                            prefetch={false}
                            className="relative flex pl-[20px] mb-[32px]"
                        >
                            <Image
                                width={12}
                                height={12}
                                src={SquareLogo}
                                quality={100}
                                priority
                                alt="Course logotype"
                                className="bottom-[77%] left-[-1%] xl:bottom-[40%] xl:left-[0%] absolute"
                            />
                            <Image
                                width={12}
                                height={12}
                                src={CircleLogo}
                                quality={100}
                                priority
                                alt="Course logotype"
                                className="bottom-[61%] left-[1%] xl:bottom-[15%] xl:left-[1%] absolute"
                            />
                            <span className="font-medium mb-[28.32px] xl:mb-0 text-(--white) text-xs xl:text-[20px]">
                                Logo
                            </span>
                        </Link>
                        <p className="block xl:hidden mb-[34px] xl:mb-[94px] font-normal text-base text-(--white) w-[253px] xl:w-[393.54px]">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
                            facere
                        </p>
                        <p className="hidden xl:block mb-[34px] xl:mb-[94px] font-normal text-base text-(--white) w-[393.54px]">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
                            facere modi possimus dignissimos, aliquam nobis eaque? Voluptatem magnam
                            quisquam rem.
                        </p>
                        <p className="order-2 xl:order-1 font-normal text-sm xl:text-base text-(--white)">
                            &#169; 2024 Created by: Martin
                        </p>
                    </div>
                    <div className="order-1 xl:order-2 flex xl:block justify-between">
                        <div>
                            <h3 className="mb-[20px] xl:pt-[40px] font-bold xl:font-semibold text-base xl:text-[20px] capitalize text-(--white)">
                                Contact Information
                            </h3>
                            <ul className="xl:mb-[66px] font-normal text-xs xl:text-base text-(--white)">
                                <li className="mb-[12px] flex">
                                    <Image
                                        width={24}
                                        height={24}
                                        src={Email}
                                        quality={100}
                                        priority
                                        alt="Email"
                                        className="mr-[12px]"
                                        style={{ filter: 'brightness(0) invert(1)' }}
                                    />
                                    example@support.com
                                </li>
                                <li className="mb-[66px] flex">
                                    <Image
                                        width={24}
                                        height={24}
                                        src={Map}
                                        quality={100}
                                        priority
                                        alt="Map"
                                        className="mr-[12px]"
                                        style={{ filter: 'brightness(0) invert(1)' }}
                                    />
                                    5 xyz st., adc, vallhalla
                                </li>
                            </ul>
                        </div>

                        <nav>
                            <ul className="xl:flex xl:gap-[32px] text-sm font-normal xl:text-base text-[var(--white)]">
                                {sections.map((section, index) => (
                                    <li key={index}>
                                        <Link href={section.href} prefetch={false}>
                                            {section.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};
