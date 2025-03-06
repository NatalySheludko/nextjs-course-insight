'use client';

import { Button } from '@/components/ui/button';

import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import ArrowRight from '../public/icons/oui_arrow-right-1.svg';
import ArrowLeft from '../public/icons/oui_arrow-right.svg';
import Play from '../public/icons/play_circle.svg';
import { images } from '@/lib/courseFormatUtils';

export const CourseFormatSection = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

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
                <h2 className="font-bold text-[40px] mb-[40px] text-(--frame) leading-[1.4]">
                    Як проходить навчання
                </h2>

                <div className="flex gap-[64px] bg-(--backgroundTertiary) rounded-[40px] p-[41px_32.92px_41px_32.5px]">
                    <div className="p-[21.87px_24.97px_26px_24.97px] border border-(--white) rounded-[40px] bg-(--background)">
                        <Image
                            // width={340}
                            // height={481}
                            src={images[currentSlide].src}
                            alt={images[currentSlide].alt}
                            quality={100}
                            priority
                            className="rounded-[16px] border border-(--white) mb-[20.7px]"
                        />
                        <Button variant="wide">
                            <Image
                                width={23}
                                height={21}
                                src={Play}
                                alt="Video play circle"
                                className="mr-[29px]"
                            />
                            Смотреть видео
                        </Button>
                    </div>

                    <div className="p-[29px_43px_47px_43px] rounded-[40px] bg-(--white)">
                        <h3 className="font-extrabold text-[32px] leading-[1.2] text-(--frame) mb-[48px]">
                            Знакомитесь с платформой
                        </h3>
                        <p className="font-normal text-base leading-[1.2] text-(--text) mb-[48px]">
                            Lorem ipsum dolor sit amet consectetur. Felis amet consectetur
                            sollicitudin at aliquam tincidunt laoreet auctor elit. Lectus ipsum
                            sapien id turpis elit cras ac. Velit risus nisl ut dictum venenatis
                            mauris faucibus. Aliquam vehicula gravida fermentum in sodales fringilla
                            mi at. Turpis volutpat parturient elit blandit proin magna pretium
                            vestibulum elit. A massa adipiscing pellentesque tempor ac vel.
                        </p>

                        <div className="flex justify-start items-center gap-[8px]">
                            <button onClick={() => changeSlide('prev')} className="cursor-pointer">
                                <Image width={16} height={17} src={ArrowLeft} alt="ArrowLeft" />
                            </button>
                            <p className="text-sm leading-[1.2] font-medium text-(--frame)">
                                {currentSlide + 1} / {images.length}
                            </p>
                            <button onClick={() => changeSlide('next')} className="cursor-pointer">
                                <Image width={16} height={17} src={ArrowRight} alt="ArrowRight" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
