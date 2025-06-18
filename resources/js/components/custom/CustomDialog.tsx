import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import React from 'react';
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
    buttonType?: 'submit' | 'button' | 'reset';
    buttonVariant?: 'link' | 'default' | 'empty' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'add' | 'customLogoBased' | null;
}

export default function CustomDialog({ title, description, children, subTitle, trigger, customWidth }: CustomDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className={`max-h-[90vh] min-w-[800px] overflow-auto ${customWidth}`}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <Separator></Separator>
                <div>
                    <h1>{subTitle}</h1>
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    );
}
