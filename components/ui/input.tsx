import { cn } from '@/lib/utils';
import { ComponentProps, forwardRef } from 'react';

type InputProps = ComponentProps<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, type = 'text', ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    'p-[16px_36px_16px_36px] text-sm font-normal text-(--silvered) placeholder:text-(--silvered) bg-(--white) rounded-[40px] w-[415px] h-[52px] focus-visible:outline-none focus-visible:ring-none',
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = 'Input';

export { Input };
