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
                    'bg-white text-(--frame) border-none rounded-[40px] px-[32px] py-[16px] w-[232px] h-[54px]',
                // filled: 'border border-(--frame) bg-(--frame) text-white rounded-[28px] px-[16px] py-[6px]',
                outlined:
                    'border border-(--frame) w-auto text-(--frame) rounded-[28px] px-[16px] py-[6px] bg-transparent',
                wide: 'bg-white text-[var(--frame)] border-none rounded-[40px] px-[118px] py-[8px] w-[468px] h-[46px]',
                ghost: 'border-[1px] border-white text-white rounded-[20px] px-[16px] py-[8px] h-[33px]',
                largeOutlined:
                    'border-[1px] border-[var(--frame)] text-[var(--frame)] rounded-[40px] px-[111px] py-[12px] w-[291px] h-[46px] bg-transparent',
                largeFilled:
                    'border-[1px] border-[var(--frame)] text-[var(--frame)] rounded-[40px] px-[111px] py-[12px] w-[291px] h-[46px] bg-[#b4b4b4]',
                extraLarge:
                    'bg-[var(--frame)] text-white rounded-[40px] px-[99px] py-[16px] w-[415px] h-[52px] border-none',
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
