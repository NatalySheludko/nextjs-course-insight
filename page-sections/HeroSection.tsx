import { Button } from '@/components/ui/button';
import cn from 'classnames';

export const HeroSection = () => {
    return (
        <div className={cn('hero bg-cover bg-no-repeat bg-center')}>
            <div className="absolute top-[110px] right-[15%] z-30">
                <img src="/heroImages/brain.png" alt="Brain" width={494} height={494} />
            </div>

            <div className="absolute top-[110px] right-[25%]">
                <img src="/heroImages/circle.png" alt="Circle" width={423} height={450} />
            </div>

            <div className="absolute bottom-[203px] right-[30%] z-40">
                <img src="/heroImages/avatar.png" alt="Avatar" width={168} height={48} />
            </div>
            <p className="absolute bottom-[203px] right-[15%] z-40 leading-[1.2] text-[16px] font-normal text-(--mainText) w-[205px]">
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
        </div>
    );
};
