import Brain from '../public/formSectionImg/small-brain.png';
import Circle from '../public/formSectionImg/blue-circle.png';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const FormSection = () => {
    return (
        <section className={cn('container')}>
            <div className="section">
                <h2 className="font-bold text-[40px] mb-[40px] text-(--frame) leading-[1.4]">
                    Зв'язок з нами
                </h2>

                <div className="flex gap-[86px] rounded-[40px] backdrop-blur-[44px] bg-(--backgroundLight) p-[69px_50px_50px_57px]">
                    <div>
                        <h3 className="font-extrabold text-[32px] leading-[1.2] text-(--frame) mb-[24px] w-[455px]">
                            Є питання? Зв&#180;яжіться з нами!
                        </h3>
                        <p className="font-normal text-lg leading-[1.2] text-(--gray) w-[455px] mb-[20px]">
                            Наша команда готова допомогти вам з будь-якими питаннями, які у вас
                            можуть виникнути. Просто заповніть форму нижче і ми з вами
                            зв&#180;яжемось протягом 24 годин.
                        </p>
                        <Image width={184} height={153} src={Brain} alt="Brain" />
                    </div>
                    <div className="relative">
                        <Input
                            id="name"
                            name="name"
                            placeholder="Ваше ім&#180;я*"
                            className="mb-[16px]"
                        />
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Ваш email*"
                            className="mb-[16px]"
                        />
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Ваш номер телефону*"
                            className="mb-[25px]"
                        />

                        <p className="font-normal text-sm leading-[1.5] text-(--backgroundMid) mb-[25px]">
                            Залишаючи свої дані, я погоджуюся на обробку персональних даних
                            відповідно до Політики конфіденційності
                        </p>
                        <Button className="uppercase relative" variant="filled">
                            Відправити
                        </Button>
                        <Image
                            className="absolute bottom-[-15%]"
                            width={588}
                            height={171}
                            src={Circle}
                            alt="Decorative circle"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
