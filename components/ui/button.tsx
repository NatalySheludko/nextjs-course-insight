'use client';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap text-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                primary:
                    'font-semibold text-lg leading-[1.2] bg-white text-(--frame) border-none rounded-[40px] px-[32px] py-[16px] w-[232px] h-[54px] cursor-pointer',
                filled: 'font-medium w-[246px] text-base xl:text-lg xl:leading-[1.2] bg-(--frame) text-(--white) rounded-[40px] xl:rounded-[40px] px-[99px] py-[16px] xl:w-full cursor-pointer',
                outlined:
                    'font-medium text-[10px] leading-[1.2] xl:leading-0 xl:text-xs border border-(--darkGray) w-auto text-(--darkGray) rounded-[28px] px-[16px] py-[6px] h-[24px] bg-transparent cursor-pointer',
                outlinedDrop:
                    'font-medium text-lg leading-[1.2] border border-(--frame) w-full text-(--frame) rounded-[40px] px-[111px] py-[12px] h-[46px] bg-transparent cursor-pointer',
                outline:
                    'font-medium text-[10px] leading-[1.2] xl:leading-0 xl:text-lg border border-(--frame) w-[102px] xl:w-auto text-(--frame) rounded-[28px] px-[16px] py-[6px] bg-transparent cursor-pointer',
                wide: 'font-medium text-[20px] leading-[1.2] bg-(--backgroundMid) xl:bg-(--white) text-(--white) xl:text-(--frame) border-none rounded-[40px] xl:pr-[118px] p-[4px_15px] w-full h-[29px] xl:pl-[32px] xl:py-[8px] xl:w-[468px] xl:h-[46px] cursor-pointer',
                ghost: 'font-medium text-[10px] xl:text-sm leading-[1.2] border border-(--white) text-(--white) rounded-[20px] px-[10px] xl:px-[16px] py-[6px] xl:py-[8px] h-[24px] w-auto xl:h-[33px] cursor-pointer',
                largeOutlined:
                    'font-medium text-lg leading-[1.2] border border-(--frame) text-(--frame) rounded-[40px] px-[111px] py-[12px] w-[291px] h-[46px] bg-transparent cursor-pointer',
            },
        },
        defaultVariants: {
            variant: 'primary',
        },
    }
);

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, ...props }, ref) => {
        return (
            <button className={cn(buttonVariants({ variant, className }))} ref={ref} {...props} />
        );
    }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
