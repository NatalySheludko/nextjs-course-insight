import { reviews } from '@/lib/reviewsUtils';
import ArrowRight from '../public/icons/Vector-1.svg';
import ArrowLeft from '../public/icons/Vector.svg';
import Ellipses from '../public/icons/ellipses.svg';

import { cn } from '@/lib/utils';
import Image from 'next/image';

export const ReviewsSection = () => {
    return (
        <section className={cn('container')}>
            <div className="section">
                <h2 className="font-bold text-[40px] mb-[40px] text-(--frame) leading-[1.4]">
                    Відгуки
                </h2>

                <div className="relative flex rounded-[40px] py-[56px] bg-(--darkGray) p-[56.5px_7.5px] overflow-hidden mb-[34px]">
                    <button className="mr-[8px]">
                        <Image
                            width={9}
                            height={50}
                            src={ArrowLeft}
                            alt="Arrow Left"
                            style={{ filter: 'brightness(0) invert(1)' }}
                        />
                    </button>

                    <ul className="flex gap-[21px] m-auto">
                        {reviews.map((plan, index) => (
                            <li
                                key={index}
                                className={cn(
                                    'w-[314px] flex pr-[21px]',
                                    index < reviews.length - 1 && 'border border-r-(--white)'
                                )}
                            >
                                <span className="text-(--white) leading-[1.0] text-[100px] font-normal mr-[13px]">
                                    &ldquo;
                                </span>
                                <div>
                                    <p className="font-normal pt-[33px] leading-[1.2] text-base text-(--white) mb-[45px]">
                                        {plan.text}
                                    </p>
                                    <p className="font-normal leading-[1.2] text-[20px] text-(--white) mb-[4px]">
                                        {plan.name}
                                    </p>
                                    <p className="font-extralight leading-[1.0] text-[20px] italic text-(--white)">
                                        {plan.position}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <button className="ml-[8px]">
                        <Image
                            width={9}
                            height={50}
                            src={ArrowRight}
                            alt="Arrow Right"
                            style={{ filter: 'brightness(0) invert(1)' }}
                        />
                    </button>
                </div>
                <Image width={47} height={10} src={Ellipses} alt="Ellipses" className="m-auto" />
            </div>
        </section>
    );
};
