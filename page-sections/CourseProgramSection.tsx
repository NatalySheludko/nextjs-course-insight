'use client';

import { Button } from '@/components/ui/button';

import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import { paragraphs, buttonLabels } from '@/lib/spikersUtils';
import { images } from '@/lib/courseProgramUtils';
import { PaginationSection } from '@/components/PaginationDropdown';

export const CourseProgramSection = () => {
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
                    Програма курсу
                </h2>

                <div className="xl:flex xl:gap-[40px] xl:mb-0 bg-(--backgroundLight) rounded-[40px] p-[40px_20px] xl:p-[50px_40px_50px_49px]">
                    <Image
                        width={340}
                        height={481}
                        src={images[currentSlide].src}
                        alt={images[currentSlide].alt}
                        quality={100}
                        priority
                        className="rounded-[20px] border-[2px] border-(--frame) w-[313px] h-[350px] xl:w-[340px] xl:h-[481px] object-cover"
                    />

                    <div>
                        <div className="relative mb-[20px] xl:mb-0">
                            <div className="absolute inset-[-2px] xl:inset-[-4px] border-[10px] border-(--frame) rounded-[20px] pointer-events-none translate-y-[18px] translate-x-[-4px] h-[130px] xl:h-[227px] w-[316.5px] xl:w-[610px]"></div>
                            <div className="w-[305px] xl:w-[594px] mt-[18px] xl:mt-[24px] border-[1.5px] border-solid rounded-[16px] p-[40px_35px_41px_36px] xl:p-[71px_29px] backdrop-blur-[44px] bg-(--backgroundLightAlt) xl:mb-[36px] ">
                                <h3 className="text-sm xl:text-[28px] leading-[1.2] font-extrabold text-(--frame) mb-[4px] xl:mb-[12px]">
                                    {activeButton}
                                </h3>
                                <p className="text-[10px] xl:text-lg leading-[1.2] text-(--text) font-normal">
                                    {activeParagraph}
                                </p>
                            </div>
                        </div>

                        <PaginationSection
                            changeSlide={changeSlide}
                            currentSlide={currentSlide}
                            totalSlides={images.length}
                        />

                        <div className="m-auto w-auto xl:w-[542px]">
                            <div className="flex gap-[7px] xl:gap-[12px] justify-center px-[80px] mb-[12px]">
                                {buttonLabels.slice(0, 3).map((label, index) => (
                                    <Button
                                        variant="outlined"
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

                            <div className="flex gap-[7px] xl:gap-[12px] justify-center px-[94.5px] mb-[25px] xl:mb-[57px]">
                                {buttonLabels.slice(3).map((label, index) => (
                                    <Button
                                        variant="outlined"
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
                    </div>
                </div>
            </div>
        </section>
    );
};
