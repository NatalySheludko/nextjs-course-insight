import { plans } from '@/lib/pricingUtils';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

export const PricingSection = () => {
    return (
        <section className={cn('container')}>
            <div className="section">
                <h2 className="font-bold text-[40px] mb-[40px] text-(--frame) leading-[1.4]">
                    Тарифи навчання
                </h2>

                <div className="flex gap-[20px]">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={cn(
                                'group p-[45px_25px_45px_27px] rounded-[40px] w-[342px] cursor-pointer transition-all transform hover:scale-105 bg-[linear-gradient(180deg,#e2e6ee_0%,#e2e6ee_100%)]',
                                'hover:bg-[linear-gradient(180deg,#070707_0%,#1d1d1d_100%)]'
                            )}
                        >
                            <h3
                                className={cn(
                                    'mb-[8px] font-medium text-[22px] leading-[1.2] text-(--backgroundDark)',
                                    'group-hover:text-(--veryLightGray)'
                                )}
                            >
                                {plan.title}
                            </h3>
                            <p
                                className={cn(
                                    'mb-[16px] leading-[1.5] font-normal text-sm text-(--textMuted)',
                                    'group-hover:text-(--veryLightGray)'
                                )}
                            >
                                {plan.text}
                            </p>

                            <div className="pb-[20px] flex gap-[16px] border-b border-(--border)">
                                <div>
                                    <p className="mb-[2px] leading-[1.5] font-normal text-sm text-(--coolGray)">
                                        {plan.module}
                                    </p>
                                    <h4
                                        className={cn(
                                            'mb-[2px] mr-[1px] font-bold text-[24px] leading-[1.45] text-(--purple)',
                                            'group-hover:text-(--lightBlue)'
                                        )}
                                    >
                                        {plan.price}
                                        <span
                                            className={cn(
                                                'font-normal text-xs leading-[1.5] text-(--purple)',
                                                'group-hover:text-(--lightBlue)'
                                            )}
                                        >
                                            {plan.month}
                                        </span>
                                    </h4>

                                    <h4
                                        className={cn(
                                            'mr-[13px] font-normal text-xs leading-[1.2] line-through text-(--textMuted)',

                                            'group-hover:text-(--veryLightGray)'
                                        )}
                                    >
                                        {plan.price}
                                        <span
                                            className={cn(
                                                'font-normal text-xs leading-[1.5] text-(--textMuted)',

                                                'group-hover:text-(--veryLightGray)'
                                            )}
                                        >
                                            {plan.month}
                                        </span>
                                    </h4>
                                </div>
                                <div className="relative">
                                    <p className="mb-[9px] font-normal text-sm leading-[1.5] text-(--coolGray)">
                                        {plan.payment}
                                    </p>
                                    <h5
                                        className={cn(
                                            'mb-[7px] font-normal font-base leading-[1.5] text-(--purple)',
                                            'group-hover:text-(--lightBlue)'
                                        )}
                                    >
                                        {plan.fullPrice}
                                    </h5>
                                    <h5
                                        className={cn(
                                            'font-normal text-xs leading-[1.2] line-through text-(--textMuted)',

                                            'group-hover:text-(--veryLightGray)'
                                        )}
                                    >
                                        {plan.oldPrice}
                                    </h5>
                                    <p className="absolute right-[-35%] bottom-[20%] font-bold text-xs leading-[1.5] text-(--backgroundDark) rounded-[12px] px-[4px] w-[30px] h-[18px] bg-(--yellow)">
                                        {plan.sale}&#8453;
                                    </p>
                                </div>
                            </div>

                            <ul
                                className={cn(
                                    'pt-[20px] pl-[15px] mb-[32px] font-normal text-base leading-[1.2] text-(--backgroundDark)',
                                    'group-hover:text-(--veryLightGray)'
                                )}
                            >
                                {plan.features.map((feature, idx) => (
                                    <li
                                        className={cn(
                                            "relative mb-[8px] pl-[15px] before:content-['•'] before:absolute before:left-0 before:text-sm before:text-(--frame)",
                                            'group-hover:before:text-(--veryLightGray)'
                                        )}
                                        key={idx}
                                    >
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant="largeOutlined"
                                className={cn('cursor-pointer', 'group-hover:bg-(--mediumGray)')}
                            >
                                Вибрати
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
