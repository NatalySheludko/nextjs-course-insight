import { Button } from '@/components/ui/button';
import cn from 'classnames';
import Image from 'next/image';

import Brain from '../public/heroImages/brain.png';
import Circle from '../public/heroImages/circle.png';
import Avatar from '../public/heroImages/avatar.png';

export const HeroSection = () => {
    return (
        <section
            className={cn(
                'hero relative rounded-b-[71px] xl:rounded-b-[72px] bg-cover bg-no-repeat bg-center'
            )}
        >
            <div className="absolute top-[35%] right-[25%] xl:top-[13.5%] xl:right-[8%] z-1">
                <Image
                    src={Brain}
                    alt="Brain"
                    className="w-[192px] h-[203px] xl:w-[494px] xl:h-[494px] "
                />
            </div>

            <div className="absolute top-[21%] right-[20%] xl:top-[110px] xl:right-[20%]">
                <Image
                    src={Circle}
                    alt="Circle"
                    className="w-[306px] h-[333px] xl:w-[423px] xl:h-[450px]"
                />
            </div>

            <div className="absolute bottom-[26%] right-[39%] xl:bottom-[21%] xl:right-[27%] z-2">
                <Image
                    src={Avatar}
                    alt="Avatar"
                    className="w-[88px] h-[25px] xl:w-[168px] xl:h-[48px]"
                />
            </div>

            <div className="mx-auto xl:mx-0 p-[62px_46px_51px_42px] xl:pt-[200px] xl:pl-[108px]">
                <h1 className="text-center xl:text-left font-semibold text-[24px] xl:text-5xl w-[305px] xl:w-[511px] mb-[20px] text-(--white) leading-[1.2]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <p className="mx-auto xl:mx-0 text-center xl:text-left leading-[1.2] mb-[323px] xl:mb-[80px] text-sm xl:text-lg w-[285px] xl:w-[511px] text-(--mainText) font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae
                    dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero
                    voluptate!
                </p>
                <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-between">
                    <Button variant="primary" className="order-2 md:order-1">
                        Зарегистрироваться
                    </Button>
                    <p className="order-1 md:order-2 mb-[38px] xl:mb-0 text-center xl:text-left leading-[1.2] text-[10px] xl:text-[16px] font-normal text-(--mainText) w-[205px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit!
                    </p>
                </div>
            </div>
        </section>
    );
};
