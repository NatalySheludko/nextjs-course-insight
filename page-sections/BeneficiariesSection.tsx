import cn from 'classnames';

import { blocks } from '@/lib/beneficiariesUtils';

export const BeneficiariesSection = () => {
    return (
        <section className={cn('container')}>
            <div className="pt-[156px] pb-[100px]">
                <h2 className="font-bold text-[20px] xl:text-[40px] mb-[28px] xl:mb-[40px] text-(--frame) leading-[1.4] xl:leading-[1.2]">
                    Кому буде корисний курс
                </h2>

                <div className="grid xl:grid-cols-[480px_1fr] xl:gap-[20px] bg-(--backgroundTertiary) rounded-[40px] py-[24px] px-[28px] xl:p-[46.5px_23px_45.5px_35px]">
                    <div className="bg-(--backgroundSecondary) mb-[24px] xl:mb-0 border border-(--white) rounded-[20px] p-[28.5px_16px_28.5px_18px] xl:p-[27px_24px_81px_22px]">
                        <p className="text-(--white) font-bold text-[20px] xl:text-[40px] leading-[1.4] capitalize mb-[10px] xl:mb-[20px]">
                            Trusted By Worldwide
                        </p>
                        <p className="text-(--white) font-bold text-[20px] xl:text-[40px] leading-[1.4] capitalize mb-[18px] xl:mb-[87px]">
                            Clients Since 1
                        </p>

                        <p className="text-(--white) font-normal text-[11px] xl:text-base leading-[1.2]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia
                            molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora
                            reiciendis libero voluptate!
                        </p>
                    </div>

                    <ul className="grid grid-cols-2 grid-rows-2 gap-x-[18px] gap-y-[24px] xl:gap-[16px]">
                        {blocks.map((block, index) => (
                            <li
                                key={index}
                                className="bg-(--transparentWhite)  rounded-[20px] p-[22.5px_12px] xl:p-[42.5px_41px_42.5px_16px] border border-white"
                            >
                                <p className="text-(--white) font-extrabold xl:font-bold text-base xl:text-[28px] leading-[1.2] capitalize mb-[12px]">
                                    {block.title}
                                </p>
                                <p className="text-(--white) font-normal text-[10px] xl:text-base leading-[1.2] w-[119px]">
                                    {block.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
