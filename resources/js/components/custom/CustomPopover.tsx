import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import React from 'react';
interface PopoverDemoProps {
    trigger?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    triggerClassName?: string;
    onClick?: () => void;
}

export default function PopoverDemo({ trigger, children, className, triggerClassName, onClick }: PopoverDemoProps) {
    return (
        <Popover>
            <PopoverTrigger onClick={onClick} className={triggerClassName} asChild>
                {trigger}
            </PopoverTrigger>
            <PopoverContent className="w-55">
                <div className={className}>{children}</div>
            </PopoverContent>
        </Popover>
    );
}
