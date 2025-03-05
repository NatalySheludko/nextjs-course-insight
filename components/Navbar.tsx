'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { menuItems } from '@/lib/menuItems';

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
                className={`flex ${
                    isMobile ? 'items-center flex-row justify-center' : 'xl:gap-[40px] pt-[20px]'
                }`}
            >
                {menuItems.map(item => {
                    const isActive = pathname === item.href; 

                    return (
                        <li key={item.href}>
                            <Link
                                href={item.href || '#'}
                                className={`${
                                    isActive
                                        ? 'font-semibold text-[18px] leading-[1.2] text-(--frame) bg-(--backgroundLight) rounded-[40px] px-[32px] py-[8px] w-[113px] h-[38px]'
                                        : 'font-medium text-lg leading-[1.2] text-(--white)'
                                } ${isMobile ? '' : ''}`}
                                onClick={isMobile && closeMenu ? closeMenu : undefined}
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
