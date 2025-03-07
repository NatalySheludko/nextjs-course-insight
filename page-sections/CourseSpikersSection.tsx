'use client';

import { Button } from '@/components/ui/button';

import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import ArrowRight from '../public/icons/oui_arrow-right-1.svg';
import ArrowLeft from '../public/icons/oui_arrow-right.svg';
import { paragraphs, buttonLabels, images } from '@/lib/spikersUtils';

export const CourseSpikersSection = () => {
    const [activeButton, setActiveButton] = useState<string>(buttonLabels[0]);
    const [activeParagraph, setActiveParagraph] = useState<string>(
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.'
    );
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const handleButtonClick = (label: string) => {
        setActiveButton(label);

        setActiveParagraph(paragraphs[label as keyof typeof paragraphs]);
    };

    const changeSlide = (direction: string) => {
        if (direction === 'next') {
            setCurrentSlide(prev => (prev + 1) % images.length);
        } else if (direction === 'prev') {
            setCurrentSlide(prev => (prev - 1 + images.length) % images.length);
        }
    };

    return (
        <section className={cn('container')}>
            <div className="section">
                <h2 className="font-bold text-[20px] xl:text-[40px] mb-[28px] xl:mb-[40px] text-(--frame) leading-[1.4]">
                    Спікери курсу
                </h2>

                <div className="xl:flex xl:gap-[40px] xl:mb-0 bg-(--backgroundLight) rounded-[40px] p-[40px_20px] xl:p-[49px_40px_51px_50px]">
                    <Image
                        src={images[currentSlide].src}
                        alt={images[currentSlide].alt}
                        quality={100}
                        priority
                        className="rounded-[20px] border-[2px] border-(--frame) w-[313px] h-[350px] xl:w-[340px] xl:h-[481px] object-cover"
                    />

                    <div>
                        <div className="relative">
                            <div className="absolute inset-[-2px] xl:inset-[-4px] border-[8px] xl:border-[10px] border-(--frame) rounded-[20px] pointer-events-none translate-y-[18px] translate-x-[-4px] h-[191.8px] xl:h-[227px] w-[317px] xl:w-[610px]"></div>
                            <div className="w-[305px] xl:w-[594px] mt-[18px] xl:mt-[24px] border-[1.5px] border-solid rounded-[16px] p-[71px_29px] backdrop-blur-[44px] bg-(--backgroundLightAlt) mb-[20px] xl:mb-[58px] ">
                                <h3 className="text-sm xl:text-[28px] leading-[1.2] font-extrabold text-(--frame) mb-[4px] xl:mb-[12px]">
                                    {activeButton}
                                </h3>
                                <p className="text-[10px] xl:text-lg leading-[1.2] text-(--text) font-normal">
                                    {activeParagraph}
                                </p>
                            </div>
                        </div>

                        <div className="m-auto xl:w-[542px] xl:mb-[58px]">
                            <div className="flex gap-[7px] xl:gap-[12px] justify-center px-[80px] mb-[12px]">
                                {buttonLabels.slice(0, 3).map((label, index) => (
                                    <Button
                                        variant="outline"
                                        key={index}
                                        className={
                                            activeButton === label
                                                ? 'bg-(--frame) text-(--white)'
                                                : ''
                                        }
                                        onClick={() => handleButtonClick(label)}
                                    >
                                        {label}
                                    </Button>
                                ))}
                            </div>

                            <div className="flex gap-[7px] xl:gap-[12px] justify-center px-[94.5px] mb-[25px] xl:mb-[58px]">
                                {buttonLabels.slice(3).map((label, index) => (
                                    <Button
                                        variant="outline"
                                        key={index}
                                        className={
                                            activeButton === label
                                                ? 'bg-(--frame) text-(--white)'
                                                : ''
                                        }
                                        onClick={() => handleButtonClick(label)}
                                    >
                                        {label}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center items-center gap-[8px]">
                            <button onClick={() => changeSlide('prev')} className="cursor-pointer">
                                <Image width={17} height={17} src={ArrowLeft} alt="ArrowLeft" />
                            </button>
                            <p className="text-xs xl:text-sm leading-[1.2] font-medium text-(--frame)">
                                {currentSlide + 1} / {images.length}
                            </p>
                            <button onClick={() => changeSlide('next')} className="cursor-pointer">
                                <Image width={17} height={17} src={ArrowRight} alt="ArrowRight" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
