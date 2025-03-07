'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

import { images } from '@/lib/careerCenterUtils';

import { useState } from 'react';
import cn from 'classnames';

export const CareerCenterSection = () => {
    const [activeImages, setActiveImages] = useState(images.default);

    return (
        <section className={cn('container')}>
            <div className="section">
                <h2 className="font-bold text-[20px] xl:text-[40px] mb-[28px] xl:mb-[40px] text-(--frame) leading-[1.4]">
                    Центр кар'єри
                </h2>

                <div className="relative overflow-hidden p-[32px_16px] xl:p-[133px_574px_132px_52px] rounded-[40px] bg-(--darkGray)">
                    {activeImages.map(({ src, className }, index) => (
                        <Image
                            key={index}
                            src={src}
                            alt="Career center image"
                            className={className}
                            width={0}
                            height={0}
                            sizes="(max-width: 640px) 223px, (max-width: 1280px) 550px, 570px"
                        />
                    ))}

                    <h3 className="hidden xl:font-extrabold xl:text-[28px] xl:leading-[1.2] xl:text-(--white) xl:mb-[12px]">
                        Для взрослых
                    </h3>
                    <p className="m-auto xl:m-0 font-normal text-[10px] xl:text-base leading-[1.2] w-[288px] text-center xl:text-left xl:w-[486px] text-(--lightGray) mb-[255px] xl:mb-[43px]">
                        ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui
                        est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint
                        vel.
                    </p>
                    <div className="flex gap-[4px]">
                        <Button variant="ghost" onClick={() => setActiveImages(images.default)}>
                            Востребованные профессии
                        </Button>
                        <Button variant="ghost" onClick={() => setActiveImages(images.business)}>
                            Практика на реальных задачах
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
