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
        <footer className="pt-100px bg-(--frame) rounded-t-[60px]">
            <div className="container">
                <div className="flex justify-between py-[40px]">
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
                                className="bottom-[40%] left-[0%] absolute"
                            />
                            <Image
                                width={12}
                                height={12}
                                src={CircleLogo}
                                quality={100}
                                priority
                                alt="Course logotype"
                                className="bottom-[15%] left-[1%] absolute"
                            />
                            <span className="font-medium text-(--white) text-[20px]">Logo</span>
                        </Link>
                        <p className="mb-[94px] font-normal text-base text-(--white) w-[393.54px]">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
                            facere modi possimus dignissimos, aliquam nobis eaque? Voluptatem magnam
                            quisquam rem.
                        </p>
                        <p className="font-normal text-base text-(--white)">
                            &#169; 2024 Created by: Martin
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-[20px] pt-[40px] font-semibold text-[20px] capitalize text-(--white)">
                            Contact Information
                        </h3>
                        <ul className="mb-[66px] font-normal text-base text-(--white)">
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
                        <nav>
                            <ul className="flex gap-[32px] font-normal text-base text-[var(--white)]">
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
