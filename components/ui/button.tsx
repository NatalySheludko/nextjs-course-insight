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
                filled: 'font-medium text-lg leading-[1.2] bg-(--frame) text-(--white) rounded-[40px] px-[99px] py-[16px] w-[415px] h-[52px] cursor-pointer',
                outlined:
                    'font-medium text-xs border border-(--darkGray) w-auto text-(--darkGray) rounded-[28px] px-[16px] py-[6px] bg-transparent cursor-pointer',
                outline:
                    'font-medium text-lg border border-(--frame) w-auto text-(--frame) rounded-[28px] px-[16px] py-[6px] bg-transparent cursor-pointer',
                wide: 'font-medium text-[20px] leading-[1.2] bg-(--white) text-(--frame) border-none rounded-[40px] pr-[118px] pl-[32px] py-[8px] w-[468px] h-[46px] cursor-pointer',
                ghost: 'font-medium text-sm leading-[1.2] border border-white text-(--white) rounded-[20px] px-[16px] py-[8px] h-[33px] cursor-pointer',
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
