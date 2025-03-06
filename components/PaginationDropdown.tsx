'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import cn from 'classnames';

import ArrowRight from '../public/icons/arrow_circle_left-1.svg';
import ArrowLeft from '../public/icons/arrow_circle_left.svg';
import { DecorativeElement } from './DecorativeElement';

interface PaginationSectionProps {
    changeSlide: (direction: string) => void;
    currentSlide: number;
    totalSlides: number;
}

export const PaginationSection = ({
    changeSlide,
    currentSlide,
    totalSlides,
}: PaginationSectionProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(prev => !prev);

    return (
        <div className="relative mb-[36px] z-50">
            <p className="flex justify-center items-center m-auto font-medium text-lg leading-[1.2] text-(--darkGray) border rounded-[28px] bg-(--backgroundLightAlt) border-(--darkGray) w-[466px] h-[30px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
            <div
                className={cn(
                    'relative m-auto transition-all duration-500 ease-in-out bg-(--darkGray) flex items-center justify-between w-[370px] h-[20px] px-[30px] ',
                    {
                        'rounded-b-[20px]': !isExpanded,
                    }
                )}
            >
                <span
                    className={cn(
                        'absolute top-[25%] left-0 w-[20px] h-[20px] bg-(--backgroundLight) rounded-full duration-300 transition-all  ease-in-out',
                        {
                            '-translate-y-1/4 -translate-x-1/2': isExpanded,
                            'translate-y-1/2 -translate-x-full': !isExpanded,
                        }
                    )}
                />

                <p className="text-xs text-(--white)">{currentSlide + 1}</p>

                <div className="flex items-center  gap-[45px]">
                    <button onClick={() => changeSlide('prev')} className="cursor-pointer">
                        <Image
                            width={16}
                            height={17}
                            src={ArrowLeft}
                            alt="Arrow Left"
                            style={{ filter: 'brightness(0) invert(1)' }}
                        />
                    </button>
                    <button
                        onClick={toggleExpand}
                        className="cursor-pointer text-(--white) text-sm"
                    >
                        &#43;
                    </button>
                    <button onClick={() => changeSlide('next')} className="cursor-pointer">
                        <Image
                            width={16}
                            height={17}
                            src={ArrowRight}
                            alt="Arrow Right"
                            style={{ filter: 'brightness(0) invert(1)' }}
                        />
                    </button>
                </div>

                <p className="text-xs text-(--white)">{totalSlides}</p>
                <span
                    className={cn(
                        'absolute top-[25%] right-0 w-[20px] h-[20px] bg-(--backgroundLight) border-none rounded-full transition-all duration-300 ease-in-out',
                        {
                            '-translate-y-1/4 translate-x-1/2': isExpanded,
                            'translate-y-0 translate-x-full': !isExpanded,
                        }
                    )}
                />
            </div>

            {isExpanded && (
                <div className="absolute right-[10.5%]">
                    {[...Array(8)].map((_, index) => (
                        <div key={index}>
                            {index > 0 && <DecorativeElement />}

                            <div className="bg-(--backgroundLightAlt) border border-(--darkGray) w-[466px] p-[16px_10px] rounded-[16px]">
                                <h5 className="text-[22px] text-(--darkGray) leading-[1.2] font-bold mb-[8px]">
                                    Модуль {index + 1}: Фундамент
                                </h5>
                                <p className="text-sm font-normal text-(--text) leading-[1.2] mb-[12px]">
                                    Открой для себя самую перспективную нишу в криптовалютах, в
                                    которой сможете самостоятельно зарабатывать приличные деньги
                                </p>
                                <p className="text-base text-(--darkGray) font-semibold leading-[1.2] mb-[8px]">
                                    Что будем изучать и делать:
                                </p>
                                <div className="flex gap-[12px]">
                                    <Button variant="filled" className="cursor-pointer">
                                        Apps Development
                                    </Button>
                                    <Button variant="filled" className="cursor-pointer">
                                        SEO Services
                                    </Button>
                                    <Button variant="filled" className="cursor-pointer">
                                        Data Analysis
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <DecorativeElement />

                    <Button onClick={toggleExpand} variant="outlined" className="mb-[28px] w-full cursor-pointer">
                        Згорнути
                    </Button>
                </div>
            )}
        </div>
    );
};
