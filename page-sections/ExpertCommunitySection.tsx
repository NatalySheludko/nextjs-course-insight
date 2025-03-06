'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

import { images } from '@/lib/expertCommunity';

import { useState } from 'react';
import cn from 'classnames';

export const ExpertCommunitySection = () => {
    const [activeImages, setActiveImages] = useState(images.default);

    return (
        <section className={cn('container')}>
            <div className="section">
                <h2 className="font-bold text-[40px] mb-[40px] text-(--frame) leading-[1.4]">
                    Експертна спільнота
                </h2>

                <div className="relative overflow-hidden p-[111.5px_505px_111.5px_50px] rounded-[40px] bg-(--darkGray)">
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
                        Центр карьеры
                    </h3>
                    <p className="font-normal text-base leading-[1.2] w-[509px] text-(--white) mb-[40px]">
                        ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui
                        est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint
                        velipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui
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
