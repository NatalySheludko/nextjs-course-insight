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
                <h2 className="font-bold text-[40px] mb-[40px] text-(--frame) leading-[1.4]">
                    Центр кар'єри
                </h2>

                <div className="relative overflow-hidden p-[133px_574px_132px_52px] rounded-[40px] bg-(--darkGray)">
                    {activeImages.map(({ src, width, height, className }, index) => (
                        <Image
                            key={index}
                            src={src}
                            alt="Career center image"
                            className={className}
                            width={width}
                            height={height}
                        />
                    ))}

                    <h3 className="font-extrabold text-[28px] leading-[1.2] text-(--white) mb-[12px]">
                        Для взрослых
                    </h3>
                    <p className="font-normal text-base leading-[1.2] w-[486px] text-(--lightGray) mb-[43px]">
                        ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui
                        est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint
                        vel.
                    </p>
                    <div className="flex gap-[4px]">
                        <Button
                            variant="ghost"
                            className="cursor-pointer"
                            onClick={() => setActiveImages(images.default)}
                        >
                            Востребованные профессии
                        </Button>
                        <Button
                            variant="ghost"
                            className="cursor-pointer"
                            onClick={() => setActiveImages(images.business)}
                        >
                            Практика на реальных задачах
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
