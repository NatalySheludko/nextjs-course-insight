import { Button } from '@/components/ui/button';
import cn from 'classnames';
import Image from 'next/image';

import Brain from '../public/heroImages/brain.png';
import Circle from '../public/heroImages/circle.png';
import Avatar from '../public/heroImages/avatar.png';

export const HeroSection = () => {
    return (
        <section className={cn('hero relative top-[-44px] bg-cover bg-no-repeat bg-center')}>
            <div className="absolute top-[110px] right-[8%] z-30">
                <Image src={Brain} alt="Brain" width={494} height={494} />
            </div>

            <div className="absolute top-[110px] right-[20%]">
                <Image src={Circle} alt="Circle" width={423} height={450} />
            </div>

            <div className="absolute bottom-[144px] right-[27%] z-40">
                <Image src={Avatar} alt="Avatar" width={168} height={48} />
            </div>
            <p className="absolute bottom-[143px] right-[8%] z-40 leading-[1.2] text-[16px] font-normal text-(--mainText) w-[205px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit!
            </p>

            <div className="pt-[200px] pl-[108px] ">
                <h1 className="font-semibold text-5xl w-[511px] mb-[20px] text-(--white) leading-[1.2]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <p className="leading-[1.2] mb-[80px] text-lg w-[511px] text-(--mainText) font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae
                    dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero
                    voluptate!
                </p>
                <Button variant="primary">Зарегистрироваться</Button>
            </div>
        </section>
    );
};
