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
    buttonName: React.ReactNode;
}

export default function CustomDialog({ title, description, children, subTitle, trigger, buttonName }: CustomDialogProps) {
    return (

            <Dialog>
                <DialogTrigger asChild>{trigger}</DialogTrigger>
                <DialogContent className='min-w-[800px]'>
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
                        <Button variant="add">{buttonName}</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
      
    );
}
