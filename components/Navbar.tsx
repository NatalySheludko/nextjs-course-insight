'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import { menuItems } from '@/lib/menuItems';
import Circle from '@/public/icons/backdrop-circle.svg';

type NavbarProps = {
    isMobile?: boolean;
    closeMenu?: () => void;
};

export const Navbar = ({ isMobile = false, closeMenu }: NavbarProps) => {
    const pathname = usePathname();

    return (
        <nav>
            {isMobile ? (
                <h1 className="sr-only">Mobile Menu</h1>
            ) : (
                <h1 className="sr-only">Navigation Menu</h1>
            )}
            <ul
                className={`flex xl:items-center ${
                    isMobile ? 'flex-col pl-[17px] gap-[40px] pt-[40px]' : 'xl:gap-[40px] pt-[20px]'
                }`}
            >
                {menuItems.map(item => {
                    const isActive = pathname === item.href;

                    return (
                        <li key={item.href}>
                            <Link
                                href={item.href || '#'}
                                className={`pl-[19px] ${
                                    isActive
                                        ? 'flex justify-center font-semibold text-[20px] xl:text-[18px] leading-[1.2] text-(--white) xl:text-(--frame) bg-(--frame) xl:bg-(--backgroundLight) rounded-[35px] xl:rounded-[40px] px-[12px] xl:px-[32px] py-[8px] w-[118px] xl:w-[113px] xl:h-[38px]'
                                        : 'font-semibold xl:font-medium text-[20px] xl:text-lg leading-[1.2] text-(--frame) xl:text-(--white)'
                                }`}
                                onClick={isMobile && closeMenu ? () => closeMenu() : undefined}
                            >
                                {item.title}
                                {isMobile && isActive && (
                                    <Image
                                        src={Circle}
                                        alt="Active link backdrop"
                                        width={20}
                                        height={20}
                                        className="ml-[4px]"
                                    />
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
