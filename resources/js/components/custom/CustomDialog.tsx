import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import React from 'react';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
interface CustomDialogProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    title?: string;
    description?: string;
    children: React.ReactNode;
    triggerElement?: React.ReactNode;
    subTitle?: string;
    trigger: React.ReactNode;
    buttonName?: React.ReactNode;
    customWidth?: string;
    buttonClassName?: string;
    buttonVariant?: 'link' | 'default' | 'empty' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'add' | 'customLogoBased' | null;
}

export default function CustomDialog({ title, description, children, subTitle, trigger, buttonName, buttonVariant,buttonClassName, customWidth }: CustomDialogProps) {
    return (
        <Dialog >
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className={`max-h-[90vh] min-w-[800px] overflow-auto ${customWidth}`} >
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <Separator></Separator>
                <div>
                    <h1>{subTitle}</h1>
                    {children}
                </div>
                <DialogFooter>
                    <Button variant={buttonVariant} className={buttonClassName}>{buttonName}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
